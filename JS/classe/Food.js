class Food {
  constructor() {
    this.size = SQUARE_SIZE;
    this.setRandomPosition();
  }
  setRandomPosition() {
    const maxSize = GAME_SIZE / this.size - 1;
    this.x = Math.round((Math.random() * GAME_SIZE) % maxSize);
    this.y = Math.round((Math.random() * GAME_SIZE) % maxSize);
  }

  draw() {
    ctx.fillStyle = "hsl(" + 360 * Math.random() + ", 50%, 50%)";
    ctx.fillRect(this.x * this.size, this.y * this.size, this.size, this.size);
  }
}
