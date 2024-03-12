const canvasDocs = document.getElementById("canvas");
const json = [
  {
    name: "Apple",
    quantity: 20,
    color: "red",
  },
  {
    name: "Orange",
    quantity: 10,
    color: "orange",
  },
  {
    name: "Banana",
    quantity: 15,
    color: "yellow",
  },
  {
    name: "Kiwi",
    quantity: 5,
    color: "green",
  },
  {
    name: "Blueberry",
    quantity: 5,
    color: "blue",
  },
  {
    name: "Grapes",
    quantity: 10,
    color: "blue",
  },
];

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let height = 0;
for (let i = 0; i < json.length; i++) {
  ctx.fillStyle = json[i].color;
  ctx.fillRect(0, 10 + height, 14 * (json[i].quantity), 15);
  ctx.fillStyle = "black"
  ctx.font = "10px"
  ctx.fillText(`${json[i].quantity} ${json[i].name}`, 2, (height + 20))
  height += 20;
}
