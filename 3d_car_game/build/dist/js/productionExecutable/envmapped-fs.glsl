#version 300 es 
precision highp float;

out vec4 fragmentColor;
//LABTODO: world space inputs
in vec4 worldNormal;
in vec4 worldPosition;

uniform struct{
  samplerCube envmapTexture; 
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

void main(void) {

  vec3 x = worldPosition.xyz / worldPosition.w;
  vec3 viewDir = normalize(camera.position - x);
  vec3 normal = normalize(worldNormal.xyz);
  //fragmentColor = vec4(abs(normal), 1.0);
  fragmentColor = texture( material.envmapTexture, reflect(-viewDir, normal));
  
}
