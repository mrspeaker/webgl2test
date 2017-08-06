import shader from "./shader.js";

const gl = document.querySelector("canvas").getContext("webgl2");

const vs = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vs, shader.vs);
gl.compileShader(vs);

const fs = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fs, shader.fs);
gl.compileShader(fs);

const program = gl.createProgram();
gl.attachShader(program, vs);
gl.attachShader(program, fs);
gl.linkProgram(program);
gl.useProgram(program);

const pos = gl.getAttribLocation(program, "pos");

const p = Array.from(Array(100), () => ({
  x: Math.random() * 2 - 1,
  y: Math.random() * 2 - 1
}));

function render() {
  requestAnimationFrame(render);

  p.forEach((p, i) => {
    if ((p.x += 0.01) > 1.05) p.x -= 2.1;
    p.y += Math.sin(Date.now() / 1000 + i) * 0.01;

    gl.vertexAttrib2f(pos, p.x, p.y);
    gl.drawArrays(gl.POINTS, 0, 1);
  });
}
render();
