#version 300 es

precision highp float;

in vec2 tex;

out vec4 fragmentColor;

uniform sampler2D colorTexture;

void main(void) {
  fragmentColor = texture(colorTexture, tex); 
}
