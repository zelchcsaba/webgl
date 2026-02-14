#version 300 es
in vec4 vertexPosition;
in vec4 vertexTexCoord;
in vec4 vertexNormal;
// LABTODO: attributes for rigging/blending
in vec4 blendIndices; 
in vec4 blendWeights;

out vec4 texCoord; // passed to FS
out vec4 worldPosition;
out vec4 worldNormal;

struct DualQuat {
  vec4 q;
  vec4 t;
};

uniform struct {
  sampler2D boneQTexture;
  sampler2D boneTTexture;
  /*iMSc: instance*/
  float nBones;
} multiMesh;

uniform struct{
  mat4 viewProjMatrix;
  vec3 position;
} camera;

void main(void) {
  // LABTODO: read all DQ data for smooth skinning
  DualQuat dq0, dq1, dq2, dq3;
  dq0.q = texture(multiMesh.boneQTexture, vec2((blendIndices.x + 0.5) / multiMesh.nBones, 0.0));
  dq0.t = texture(multiMesh.boneTTexture, vec2((blendIndices.x + 0.5) / multiMesh.nBones, 0.0));

  dq1.q = texture(multiMesh.boneQTexture, vec2((blendIndices.y + 0.5) / multiMesh.nBones, 0.0));
  dq1.t = texture(multiMesh.boneTTexture, vec2((blendIndices.y + 0.5) / multiMesh.nBones, 0.0));

  dq2.q = texture(multiMesh.boneQTexture, vec2((blendIndices.z + 0.5) / multiMesh.nBones, 0.0));
  dq2.t = texture(multiMesh.boneTTexture, vec2((blendIndices.z + 0.5) / multiMesh.nBones, 0.0));

  dq3.q = texture(multiMesh.boneQTexture, vec2((blendIndices.w + 0.5) / multiMesh.nBones, 0.0));
  dq3.t = texture(multiMesh.boneTTexture, vec2((blendIndices.w + 0.5) / multiMesh.nBones, 0.0));

  // LABTODO: fix podality
  vec3 podality = vec3(
    (dot(dq0.q, dq1.q) >= 0.0) ? 1.0 : -1.0,
    (dot(dq0.q, dq2.q) >= 0.0) ? 1.0 : -1.0,
    (dot(dq0.q, dq3.q) >= 0.0) ? 1.0 : -1.0
  );

  vec4 w = blendWeights;
  w.w = 1.0 - dot(w.xyz, vec3(1.0,1.0,1.0));  
  w.yzw *= podality;                  
  // LABTODO: blending for smooth skinning

  DualQuat dq;
  dq.q = dq0.q * w.x +
         dq1.q * w.y +
         dq2.q * w.z +
         dq3.q * w.w;

  dq.t = dq0.t * w.x +
         dq1.t * w.y +
         dq2.t * w.z +
         dq3.t * w.w;  
         
  // LABTODO: normalize dq

  float len = length(dq.q);
  dq.q /= len;
  dq.t /= len;


  // rotate with dq
  vec3 blendedPos = vertexPosition.xyz + 2.0 * cross(dq.q.xyz,
            cross(dq.q.xyz, vertexPosition.xyz) +
            dq.q.w * vertexPosition.xyz);
  // translate by dq
  blendedPos += 2.0*(dq.q.w*dq.t.xyz - dq.t.w*dq.q.xyz + cross(dq.q.xyz, dq.t.xyz));
  // iMSc: offset by instance

  worldPosition = vec4(blendedPos, 1);
  gl_Position = worldPosition * camera.viewProjMatrix;
  texCoord = vertexTexCoord;
  // rotate by dq
  worldNormal.xyz = vertexNormal.xyz + 2.0 * cross(dq.q.xyz, cross(dq.q.xyz, vertexNormal.xyz) + dq.q.w * vertexNormal.xyz);
}
