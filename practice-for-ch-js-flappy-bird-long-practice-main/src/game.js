import './level.js'

export default class FlappyBird {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
  }
}

FlappyBird.prototype.animate = function(ctx){
  this.level1.drawBackground(ctx);
}

FlappyBird.prototype.restart = function(ctx){
  this.level1 = new Level(this.dimensions); 
  this.animate();
  // this.animate.bind(this.ctx);
}