export default class Level extends FlappyBird {
  constructor(dimensions) {
    // this.dimensions = dimensions;
    super(dimensions);
  }

  drawBackground(ctx) {
    ctx.fillStyle = "skyblue";
    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
  }
}


