#version 300 es 
precision highp float;

in vec2 texCoord; // passed from VS

uniform struct {
	sampler2D keyTexture;
	float nNodes;
	float nKeys;
	float animationTime;
	/*iMSc: instance*/	
} mesh;

layout(location = 0) out vec4 fragQ;
layout(location = 1) out vec4 fragT;

void main(){	

	float iNode = texCoord.y * mesh.nNodes;

	float frame = floor(mesh.animationTime * 30.0);
	frame = mod(frame, mesh.nKeys);
	float iKey = frame*2.0;


  fragQ = texture(mesh.keyTexture, vec2(
    (iKey + 0.5) / mesh.nKeys / 2.0,
    iNode / mesh.nNodes));
	
  iKey += 1.0;
  fragT = texture(mesh.keyTexture, vec2(
    (iKey + 0.5) / mesh.nKeys / 2.0,
	iNode / mesh.nNodes)); 

}
