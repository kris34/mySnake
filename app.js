const canvas = document.getElementById('canvas');
/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext('2d');

class Sprite {
  constructor({ position, velocity }) {
    this.position = position;
    this.velocity = velocity;
  }

  draw(width, height) {
    ctx.fillStyle = 'orange';
    ctx.fillRect(this.position.x, this.position.y, width, height);
  }
}

const player = new Sprite({
  position: {
    x: 10,
    y: 10,
  },
  velocity: {
    x: 0,
    y: 0,
  },
});

player.draw(20, 20);
