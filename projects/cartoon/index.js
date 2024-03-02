"use strict";

class Items {
  constructor(canvas, context) {
    this.ctx = context;
    this.canvas = canvas;
    this.spaceShipData = {
      color: "blue",
      width: 8,
      height: 22,
      position: {
        x: 0,
        y: 0,
      },
      angle: 0,
    };
  }

  moon(x, y) {
    this.ctx.beginPath();
    this.ctx.fillStyle = "white";
    this.ctx.arc(x, y, 12.5, 0, 2 * Math.PI);
    this.ctx.fill();
    this.ctx.closePath();
  }

  spaceShip() {
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.translate(this.canvas.width / 2, this.canvas.height / 2);
    this.ctx.arc(0, 0, 50, 0, 2 * Math.PI / 2)
    this.ctx.fillStyle = this.spaceShipData.color;
    this.ctx.fill();
    this.ctx.closePath()
  }
  star() {
    let stars = [];
    for (let i = 0; i < 200; i++) {
      stars[i] = {
        x: Math.random() * this.canvas.width,
        y: (Math.random() * this.canvas.height) / 2,
        radius: Math.sqrt(Math.random() * 4),
      };
    }
    for (let i = 0; i < stars.length; i++) {
      let star = stars[i];
      this.ctx.beginPath();
      this.ctx.arc(star.x, star.y, star.radius, 10, 2 * Math.PI);
      this.ctx.fillStyle = `rgba(255, 255, 255, 1})`;
      this.ctx.closePath();
      this.ctx.fillStyle = "#bbb";
      this.ctx.fill();
    }
  }
}

class Cartoon {
  canvas = null;
  context = null;
  items = null;
  static colors = {
    night: "#5c54a4",
    ground: "#e9bf83",
  };
  setTitle(title, x, y) {
    this.context.font = "18px serif";
    this.context.fillStyle = "blue";
    this.context.textAlign = "center";
    this.context.fillText(title, x, y);
  }

  setUp() {
    const canvasDocs = document.getElementById("canvas");
    const canvas = canvasDocs.getContext("2d");
    this.context = canvas ?? null;
    this.canvas = canvasDocs;
    this.items = new Items(this.canvas, this.context);
    this.setBackground(Cartoon.colors.night);
    this.setGround();
    return this;
  }

  setBackground(color) {
    this.context.fillStyle = color;
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height / 2);
    return this;
  }

  setGround(color) {
    this.context.fillStyle = color ?? Cartoon.colors.ground;
    this.context.fillRect(
      0,
      this.canvas.height / 2,
      this.canvas.width,
      this.canvas.height / 2
    );
    return this;
  }

  draw() {
    this.items.moon(30, 20);
    this.items.star();
    this.items.spaceShip()
  }
}

new Cartoon().setUp().draw();

