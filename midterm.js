const colors = ['blue', 'red', 'green', 'yellow', 'orange', 'purple', 'pink'];

function changeColor() {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.getElementById("heading").style.color = randomColor;
}
