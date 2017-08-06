const vs = `#version 300 es

  in vec4 pos;
  out vec4 p;
  void main () {
    p = pos;
    gl_PointSize = 40.0;
    gl_Position = pos;
  }
`;

const fs = `#version 300 es
  precision mediump float;

  out vec4 color;
  in vec4 p;
  void main () {
    float dist = distance(vec2(0.5, 0.5), gl_PointCoord.xy);
    if (dist < 0.5) {
      color = vec4(gl_PointCoord.x, abs(p.x*p.y), gl_PointCoord.y, 1.0);
    } else {
      discard;
    }
  }
`;

export default { vs, fs };
