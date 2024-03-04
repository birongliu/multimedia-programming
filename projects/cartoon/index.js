"use strict";

class Items {
  constructor(canvas, context) {
    this.ctx = context;
    this.canvas = canvas;
  }

  grass() {
    ctx.beginPath();
    ctx.moveTo(75, 50);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 25);
    ctx.fill();
  }

  house() {
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.translate(this.canvas.width / 2, this.canvas.height / 2);
    this.ctx.fillStyle = "yellow";
    this.ctx.rect(0, 0, 100 / 2, -50 / 2);
    this.ctx.fill();
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.moveTo(10, 0);
    this.ctx.lineTo(10, -10);
    this.ctx.lineTo(0, -10);
    this.ctx.lineTo(0, 0);
    this.ctx.fillStyle = "brown";
    this.ctx.fill();
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.moveTo(25.5, -40);
    this.ctx.lineTo(0, -25);
    this.ctx.lineTo(50, -25);
    this.ctx.fillStyle = "brown";
    this.ctx.fill();
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.moveTo(40, -10);
    this.ctx.lineTo(30, -10);
    this.ctx.lineTo(30, -2);
    this.ctx.lineTo(40, -2);
    this.ctx.lineTo(40, -11);
    this.ctx.fillStyle = "white";
    this.ctx.fill();
    this.ctx.stroke();
  }

  moon(x, y) {
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.fillStyle = "white";
    this.ctx.arc(x, y, 12.5, 0, 2 * Math.PI);
    this.ctx.fill();
    this.ctx.closePath();
    this.ctx.restore();
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
    for (const star of stars) {
      this.ctx.beginPath();
      this.ctx.arc(star.x, star.y, star.radius, 10, 2 * Math.PI);
      this.ctx.fillStyle = `rgba(255, 255, 255, 1})`;
      this.ctx.closePath();
      this.ctx.fillStyle = "#bbb";
      this.ctx.fill();
      this.ctx.closePath();
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
      this.canvas.height
    );
    return this;
  }

  draw() {
    this.items.moon(30, 20);
    this.items.star();
    this.items.house();
    this.items.grass();
  }
}

new Cartoon().setUp().draw();
