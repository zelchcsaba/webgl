#version 300 es 
precision highp float;

out vec4 fragmentColor;
in vec4 tex;
//LABTODO: world space inputs
in vec4 worldNormal;
in vec4 worldPosition;
in vec4 modelPosition;

uniform struct{
//  //LABTODO: uniform for surface color (diffuse refleciton coeff kd)
  sampler2D phongTexture;
  float shininess;
  vec3 specularColor;
} material;

uniform struct{
  mat4 viewProjMatrix;
  //LABTODO: uniform for computing view direction
  vec3 position;
} camera;

//LABTODO: uniforms for light source data
uniform struct {
  vec4 position;
  vec3 powerDensity;
} lights[8]; 

vec3 shade(
  vec3 normal, vec3 lightDir, vec3 viewDir,
  vec3 powerDensity, vec3 materialColor, vec3 specularColor, float shininess) {

    vec3 effectivePowerDensity = powerDensity/pow(length(lightDir), 2.0);

    vec3 diffuse = max(dot(normal, normalize(lightDir)), 0.0) *
    effectivePowerDensity * materialColor;

    vec3 halfVector = normalize(lightDir + viewDir);
    float cosDelta = max(dot(normal, halfVector), 0.0);

    //phong blinn visszaverodesi modell alapjan
    vec3 specular = effectivePowerDensity * specularColor * pow(cosDelta, shininess);

  return

    specular + diffuse;

}

void main(void) {
    vec3 normal = normalize(worldNormal.xyz);

    vec4 baseColor = texture(material.phongTexture, tex.xy/tex.w);

    vec3 result = vec3(0.0);
    vec3 lightDir;
    vec3 viewDir = normalize(camera.position - worldPosition.xyz);


    for(int i = 0; i < 8; i++) {
        if(lights[i].powerDensity == vec3(0.0)) {
            continue;
        }

    //lightDir pontfeny es iranyfeny eseteben
    if(lights[i].position.w == 0.0) {
        //iranyfeny
        lightDir = normalize(lights[i].position.xyz);
    } else {
        //pontfeny
        lightDir = lights[i].position.xyz - worldPosition.xyz;
    }

    vec3 powerDensity = lights[i].powerDensity;

    result += shade(normal,
      lightDir, viewDir, powerDensity,
      baseColor.rgb, material.specularColor, material.shininess);

    }

    fragmentColor = vec4(result, baseColor.w);

}
