#version 300 es
in vec4 vertexPosition;
out vec4 tex;


uniform struct {
	mat4 viewProjMatrixInverse;
} camera;


void main(void) {

  gl_Position = vertexPosition;

  vec4 worldPos =  vertexPosition * camera.viewProjMatrixInverse;

  tex = worldPos*0.5;
}
