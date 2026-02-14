#version 300 es

precision highp float;

in vec4 texCoord;
in vec3 normal;
out vec4 fragmentColor;

uniform struct {
	sampler2D colorTexture;
} material;

void main(void) {
    vec2 uv = texCoord.xy / texCoord.w;

    float noiseScale = 0.01;
    uv.x += sin(uv.y * 50.0) * noiseScale;
    uv.y += cos(uv.x * 50.0) * noiseScale;

    fragmentColor = texture(material.colorTexture, uv);
    // * 0.2 + vec4(normalize(normal.xyz), 1);
}
