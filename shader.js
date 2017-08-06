const vs = `#version 300 es

  in vec4 pos;
  out vec4 screen;
  void main () {
    screen = pos;
    gl_PointSize = 40.0;
    gl_Position = pos;
  }
`;

const fs = `#version 300 es
  precision mediump float;

  out vec4 color;
  in vec4 screen;
  void main () {
    vec2 uv = gl_PointCoord.xy;
    float dist = distance(vec2(0.5, 0.5), uv);
    if (dist < 0.5) {
      color = vec4(uv.x, abs(screen.x * screen.y), uv.y, 1.0);
    } else {
      discard;
    }
  }
`;

export default { vs, fs };
