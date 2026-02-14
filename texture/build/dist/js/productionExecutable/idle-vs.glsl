#version 300 es

layout(location = 0) in vec4 vertexPosition;
layout(location = 2) in vec2 vertexTexCoord;

uniform vec2 spriteOffset; 
uniform vec2 spriteScale; 
uniform vec2 characterPos;

out vec2 tex;

void main(void) {
  gl_Position = vertexPosition+vec4(characterPos.xy,0,0); 
  tex = vertexTexCoord*spriteScale+spriteOffset; 
}