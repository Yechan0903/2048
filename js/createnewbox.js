const btnBox = document.querySelector("button");
const gameBox = document.querySelector("#game-box");
function reset() {
  localStorage.removeItem("boxs");
  boxs = [];
  posPosition = [
    [0, 0],
    [1, 0],
    [2, 0],
    [3, 0],
    [0, 1],
    [1, 1],
    [2, 1],
    [3, 1],
    [0, 2],
    [1, 2],
    [2, 2],
    [3, 2],
    [0, 3],
    [1, 3],
    [2, 3],
    [3, 3],
  ];
  gameBox.innerHTML = "";
  createNewbox();
}
function updateLocalBoxs() {
  localStorage.setItem("boxs", JSON.stringify(boxs));
}
function setPosition(position) {
  let x = position[0];
  let y = position[1];
  x = 8 + x * 98;
  y = 8 + y * 98;
  return [x, y];
}
function paintBox({ id, position, num }) {
  const div = document.createElement("div");
  div.classList.add("num-box");
  div.classList.add(`num${num}`);
  div.id = id;
  div.innerText = String(num);
  xy = setPosition(position);
  div.style.top = `${xy[1]}px`;
  div.style.left = `${xy[0]}px`;
  gameBox.appendChild(div);
}
function createNewbox() {
  posPosition = [
    [0, 0],
    [1, 0],
    [2, 0],
    [3, 0],
    [0, 1],
    [1, 1],
    [2, 1],
    [3, 1],
    [0, 2],
    [1, 2],
    [2, 2],
    [3, 2],
    [0, 3],
    [1, 3],
    [2, 3],
    [3, 3],
  ];
  for (let index = 0; index < boxs.length; index++) {
    posPosition = posPosition.filter(
      (i) => String(i) !== String(boxs[index].position)
    );
  }
  let position = posPosition[Math.floor(Math.random() * posPosition.length)];
  let num = (Math.floor(Math.random() * 2) + 1) * 2;
  const newBox = {
    id: Date.now(),
    position,
    num,
  };
  paintBox(newBox);
  boxs.push(newBox);
  updateLocalBoxs();
}
let posPosition = [
  [0, 0],
  [1, 0],
  [2, 0],
  [3, 0],
  [0, 1],
  [1, 1],
  [2, 1],
  [3, 1],
  [0, 2],
  [1, 2],
  [2, 2],
  [3, 2],
  [0, 3],
  [1, 3],
  [2, 3],
  [3, 3],
];
let boxs = [];
let localState = localStorage.getItem("boxs");
if (localState) {
  boxs = JSON.parse(localState);
  for (let index = 0; index < boxs.length; index++) {
    paintBox(boxs[index]);
  }
}
if (boxs.length === 0) {
  createNewbox();
}
