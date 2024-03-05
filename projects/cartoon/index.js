"use strict";

class Items {
  constructor(canvas, context) {
    this.ctx = context;
    this.canvas = canvas;
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
    this.ctx.restore();
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

  write(title, x, y, color, size = 18) {
    this.context.font = `${size}px serif`;
    (this.context.fillStyle = color), (this.context.textAlign = "center");
    this.context.fillText(title, x, y);
  }

  setUp() {
    const canvasDocs = document.getElementById("canvas");
    const canvas = canvasDocs.getContext("2d");
    this.context = canvas ?? null;
    this.canvas = canvasDocs;
    this.items = new Items(this.canvas, this.context);
    this.setBackground(Cartoon.colors.night);
    this.write("Cartoon", 140, 15, "blue");
    this.setGround();
    this.write("This cartoon has moon, houses, star.", 150, 90, "white", 12);
    this.button();
    return this;
  }

  button() {
    this.write("Click here to go back home", 150, 100, "black", 10);
    this.canvas.onclick = (ctx) => {
      console.log(ctx.clientY);
      if (ctx.clientX >= 320 && ctx.clientY >= 308) {
        window.location.replace("../../")
      }
    };
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
    this.button();
  }
}

new Cartoon().setUp().draw();
