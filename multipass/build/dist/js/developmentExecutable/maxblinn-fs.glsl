#version 300 es 
precision highp float;

out vec4 fragmentColor;
in vec4 texCoord;

in vec4 worldNormal;
in vec4 worldPosition;
in vec4 modelPosition;

uniform struct{
  sampler2D shadedTexture;
  float shininess;
  vec3 specularColor;
} material;

uniform struct{
  mat4 viewProjMatrix;
  vec3 position;
} camera;

uniform struct {
  vec4 position;      
  vec3 powerDensity;  
  vec3 direction;     
  float coneCos;      
  float falloff;      
} lights[8]; 

vec3 shade(
    
    vec3 normal, vec3 lightDir, vec3 viewDir,
    vec3 powerDensity, vec3 materialColor, vec3 specularColor, float shininess) {
  
    vec3 effectivePowerDensity = powerDensity/pow(length(lightDir), 2.0);

    vec3 diffuse = max(dot(normal, normalize(lightDir)), 0.0) *
    effectivePowerDensity * materialColor;

    vec3 halfVector = normalize(lightDir + viewDir);
    float cosDelta = max(dot(normal, halfVector), 0.0);

    float cosa = max(dot(normal, normalize(lightDir)), 0.0);
    float cosb = max(dot(normal, viewDir), 0.0);
    //maximum blinn visszaverodesi modell alapjan
    vec3 specular = effectivePowerDensity * specularColor * pow(cosDelta, shininess) * (cosa / max(cosb, cosa));

  return

    specular + diffuse;

}

void main(void) {
    vec3 normal = normalize(worldNormal.xyz);

    vec4 baseColor = texture(material.shadedTexture, texCoord.xy/texCoord.w);

    vec3 result = vec3(0.0);
    vec3 lightDir;
    vec3 viewDir = normalize(camera.position - worldPosition.xyz);

    for(int i = 0; i < 8; i++) {
      if(lights[i].powerDensity == vec3(0.0)) {
          continue;
      }

      if (lights[i].position.w == 0.0) {

        lightDir = normalize(lights[i].position.xyz);
        vec3 powerDensity = lights[i].powerDensity;

        result += shade(normal, lightDir, viewDir, powerDensity,
                    baseColor.rgb, material.specularColor, material.shininess);

      }else{
        lightDir = lights[i].position.xyz - worldPosition.xyz;
        vec3 powerDensity = lights[i].powerDensity;

      
        if (length(lights[i].direction) > 0.001) {
          vec3 spotDir = normalize(-lights[i].direction); 
          vec3 L = normalize(lightDir);
          float cosTheta = dot(L, spotDir);

          if (cosTheta > lights[i].coneCos) {

            float spotEffect = pow(cosTheta, lights[i].falloff);
        
            result += shade(normal, lightDir, viewDir,
                        powerDensity * spotEffect,
                        baseColor.rgb, material.specularColor, material.shininess);

          }
        
        } else {
        
          result += shade(normal, lightDir, viewDir,
                    powerDensity, baseColor.rgb, material.specularColor, material.shininess);
        }
      }
    }

    fragmentColor = vec4(result, baseColor.w);

}
