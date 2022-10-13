const GAME_SIZE = 600;
const SQUARE_SIZE = 20;
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const snake = new Snake(SQUARE_SIZE);
const food = new Food();
const restart = document.getElementById("restart-btn");
let currentDirection = "right";

document.querySelector("#restart-btn").addEventListener("click", function () {
  window.location.reload();
  return false;
});

function detectKeyPressed() {
  document.addEventListener("keydown", function (event) {
    switch (event.key) {
      case "ArrowLeft":
        currentDirection = "left";
        break;
      case "ArrowRight":
        currentDirection = "right";
        break;
      case "ArrowUp":
        currentDirection = "up";
        break;
      case "ArrowDown":
        currentDirection = "down";
      default:
        break;
    }
  });
}
function clearScreen() {
  ctx.clearRect(0, 0, GAME_SIZE, GAME_SIZE);
}
function update() {
  clearScreen();
  food.draw();
  snake.update();
  if (snake.alive) {
    setTimeout(update, 150);
  }
}
function start() {
  detectKeyPressed();
  update();
  restart.style.display = "block";
}
document.querySelector("#hard-mode").addEventListener("click", function () {
  if (snake.alive) {
    setTimeout(update, 180);
  }
});
start();
