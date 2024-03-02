"use strict";

class Items {
  constructor(canvas, context) {
    this.ctx = context;
    this.canvas = canvas;
  }

  sun(x, y) {
    this.ctx.beginPath();
    this.ctx.fillStyle = "yellow";
    this.ctx.arc(x, y, 12.5, 0, 2 * Math.PI);
    this.ctx.fill();
    this.ctx.closePath();
  }

  rocketShip() {
    const ctx = this.ctx;
  }

  rocketShipBase() {
    this.ctx.beginPath();
    this.ctx.fillStyle = "gray";
    this.ctx.rect(100, this.canvas.height / 2 - 3, this.canvas.height / 2, 5);
    this.ctx.fill();
    this.ctx.closePath();
  }
}

class Cartoon {
  canvas = null;
  context = null;
  items = null;
  static colors = {
    light: "rgb(64, 156, 255)",
    night: "#5c54a4",
    ground: "#e9bf83",
  };

  setUp() {
    const canvasDocs = document.getElementById("canvas");
    const canvas = canvasDocs.getContext("2d");
    this.context = canvas ?? null;
    this.canvas = canvasDocs;
    this.items = new Items(this.canvas, this.context);
    this.setBackground();
    this.setGround();
    return this;
  }

  setBackground(color) {
    this.context.fillStyle = color ?? Cartoon.colors.light;
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
    this.items.rocketShip();
    this.items.sun(30, 20);
  }
}

new Cartoon().setUp().draw();
