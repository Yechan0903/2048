let countMove = 0;
function removeBox(id) {
  boxs.find((i) => i.id === id).num = 0;
  setTimeout(() => {
    document.getElementById(`${id}`).remove();
  }, 200);
  boxs = boxs.filter((box) => box.id !== id);
}
function plusBox(id, num) {
  document.getElementById(`${id}`).classList.add(`num${num * 2}`);
  document.getElementById(`${id}`).classList.remove(`num${num}`);
  boxs.find((i) => i.id === id).num = num * 2;
  document.getElementById(`${id}`).innerText = `${num * 2}`;
}
function moveY(id, i) {
  let Y = document.getElementById(`${id}`).style.top;
  Y = Y.slice(0, -2);
  Y = Number(Y) + 98 * i;
  document.getElementById(`${id}`).style.top = `${Y}px`;
  if (i !== 0) {
    countMove = countMove + 1;
  }
}
function moveX(id, i) {
  let X = document.getElementById(`${id}`).style.left;
  X = X.slice(0, -2);
  X = Number(X) + 98 * i;
  document.getElementById(`${id}`).style.left = `${X}px`;
  if (i !== 0) {
    countMove = countMove + 1;
  }
}
function boxwjdfuf(boxx, a) {
  let wjdfufehlsBox = [];
  for (let index = 0; index < 4; index++) {
    if (boxx.find((i) => i.position[a] === index)) {
      wjdfufehlsBox.push(boxx.find((i) => i.position[a] === index));
    }
  }
  return wjdfufehlsBox;
}
function moveUp() {
  countMove = 0;
  for (let index = 0; index < 4; index++) {
    let boxX = boxs.filter((i) => i.position[0] === index);
    boxX = boxwjdfuf(boxX, 1);
    let subMove = 0;
    for (let index = 0; index < boxX.length; index++) {
      let howMove = index - (boxX[index].position[1] + subMove);
      boxX[index].position[1] = index - subMove;
      moveY(boxX[index].id, howMove);
      if (boxX[index - 1] && boxX[index].num === boxX[index - 1].num) {
        document.getElementById(`${boxX[index].id}`).style.zIndex = "-1";
        moveY(boxX[index].id, -1);
        plusBox(boxX[index - 1].id, boxX[index - 1].num);
        removeBox(boxX[index].id);
        subMove = subMove + 1;
        countMove = countMove + 1;
      }
    }
  }
  if (countMove !== 0) {
    createNewbox();
  }
}
function moveDown() {
  countMove = 0;
  for (let index = 0; index < 4; index++) {
    let boxX = boxs.filter((i) => i.position[0] === index);
    boxX = boxwjdfuf(boxX, 1);
    let subMove = 0;
    for (let index = boxX.length - 1; index > -1; index--) {
      let howMove =
        4 + index - boxX.length - (boxX[index].position[1] - subMove);
      boxX[index].position[1] = 4 + index - boxX.length + subMove;
      moveY(boxX[index].id, howMove);
      if (boxX[index + 1] && boxX[index].num === boxX[index + 1].num) {
        document.getElementById(`${boxX[index].id}`).style.zindex = "-1";
        moveY(boxX[index].id, 1);
        plusBox(boxX[index + 1].id, boxX[index + 1].num);
        removeBox(boxX[index].id);
        subMove = subMove + 1;
        countMove = countMove + 1;
      }
    }
  }
  if (countMove !== 0) {
    createNewbox();
  }
}
function moveLeft() {
  countMove = 0;
  for (let index = 0; index < 4; index++) {
    let boxX = boxs.filter((i) => i.position[1] === index);
    boxX = boxwjdfuf(boxX, 0);
    let subMove = 0;
    for (let index = 0; index < boxX.length; index++) {
      let howMove = index - (boxX[index].position[0] + subMove);
      boxX[index].position[0] = index - subMove;
      moveX(boxX[index].id, howMove);
      if (boxX[index - 1] && boxX[index].num === boxX[index - 1].num) {
        document.getElementById(`${boxX[index].id}`).style.zIndex = "-1";
        moveX(boxX[index].id, -1);
        plusBox(boxX[index - 1].id, boxX[index - 1].num);
        removeBox(boxX[index].id);
        subMove = subMove + 1;
        countMove = countMove + 1;
      }
    }
  }
  if (countMove !== 0) {
    createNewbox();
  }
}
function moveRight() {
  countMove = 0;
  for (let index = 0; index < 4; index++) {
    let boxX = boxs.filter((i) => i.position[1] === index);
    boxX = boxwjdfuf(boxX, 0);
    let subMove = 0;
    for (let index = boxX.length - 1; index > -1; index--) {
      let howMove =
        4 + index - boxX.length - (boxX[index].position[0] - subMove);
      boxX[index].position[0] = 4 + index - boxX.length + subMove;
      moveX(boxX[index].id, howMove);
      if (boxX[index + 1] && boxX[index].num === boxX[index + 1].num) {
        document.getElementById(`${boxX[index].id}`).style.zindex = "-1";
        moveX(boxX[index].id, 1);
        plusBox(boxX[index + 1].id, boxX[index + 1].num);
        removeBox(boxX[index].id);
        subMove = subMove + 1;
        countMove = countMove + 1;
      }
    }
  }
  if (countMove !== 0) {
    createNewbox();
  }
}
function ableMove() {
  let ableMoveCount = 0;
  for (let index = 0; index < 16; index++) {
    if (boxs[index]) {
      let mainBox = boxs[index];
      if (
        boxs.find(
          (i) =>
            i.position[0] === mainBox.position[0] &&
            i.position[1] === mainBox.position[1] - 1
        )
      ) {
        let subBox = boxs.find(
          (i) =>
            i.position[0] === mainBox.position[0] &&
            i.position[1] === mainBox.position[1] - 1
        );
        if (mainBox.num === subBox.num) {
          ableMoveCount++;
        }
      }
      if (
        boxs.find(
          (i) =>
            i.position[0] === mainBox.position[0] &&
            i.position[1] === mainBox.position[1] + 1
        )
      ) {
        let subBox = boxs.find(
          (i) =>
            i.position[0] === mainBox.position[0] &&
            i.position[1] === mainBox.position[1] + 1
        );
        if (mainBox.num === subBox.num) {
          ableMoveCount++;
        }
      }
      if (
        boxs.find(
          (i) =>
            i.position[1] === mainBox.position[1] &&
            i.position[0] === mainBox.position[0] - 1
        )
      ) {
        let subBox = boxs.find(
          (i) =>
            i.position[1] === mainBox.position[1] &&
            i.position[0] === mainBox.position[0] - 1
        );
        if (mainBox.num === subBox.num) {
          ableMoveCount++;
        }
      }
      if (
        boxs.find(
          (i) =>
            i.position[1] === mainBox.position[1] &&
            i.position[0] === mainBox.position[0] + 1
        )
      ) {
        let subBox = boxs.find(
          (i) =>
            i.position[1] === mainBox.position[1] &&
            i.position[0] === mainBox.position[0] + 1
        );
        if (mainBox.num === subBox.num) {
          ableMoveCount++;
        }
      }
    }
  }
  if (ableMoveCount === 0) {
    return false;
  } else {
    return true;
  }
}
function key(e) {
  if (e.key === "ArrowRight") {
    moveRight();
  }
  if (e.key === "ArrowDown") {
    moveDown();
  }
  if (e.key === "ArrowLeft") {
    moveLeft();
  }
  if (e.key == "ArrowUp") {
    moveUp();
  }
  if (boxs.length === 16) {
    if (!ableMove()) {
      setTimeout(() => {
        alert("game over");
        reset();
      }, 600);
    }
  }
}
document.addEventListener("keydown", key);
btnBox.addEventListener("click", reset);
