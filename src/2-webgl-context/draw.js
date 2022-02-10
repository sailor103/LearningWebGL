function main() {
  const canvas = document.querySelector('#webgl');
  const gl = canvas.getContext('webgl');

  if (!gl) {
    return;
  }

  gl.clearColor(0, 1, 0, 1);
  gl.clear(gl.COLOR_BUFFER_BIT);
}
