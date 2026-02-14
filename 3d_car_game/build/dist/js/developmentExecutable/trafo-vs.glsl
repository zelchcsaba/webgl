#version 300 es

in vec4 vertexPosition;
in vec3 vertexNormal;
in vec4 vertexTexCoord;

uniform struct{
	mat4 modelMatrix;
	mat4 modelMatrixInverse;
	//LABTODO: uniform for transforming normals
} gameObject;

uniform struct{
	mat4 viewProjMatrix;
	//LABTODO: uniform for computing view direction
	vec3 position;
} camera;

out vec4 tex;
//LABTODO: world space outputs
out vec4 modelPosition;
out vec4 worldPosition;
out vec4 worldNormal;

void main(void) {

  gl_Position = vertexPosition * gameObject.modelMatrix * camera.viewProjMatrix;
  
  tex = vertexTexCoord;

  modelPosition = vertexPosition;
  worldPosition = vertexPosition * gameObject.modelMatrix;
  worldNormal = gameObject.modelMatrixInverse * vec4(vertexNormal, 0.0);

}