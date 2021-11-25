const rollBtn = document.getElementById("roll-btn");
const dice = document.querySelector(".dice");
dice.style.transform =
  "scale(.5) rotateX(0deg) rotateY(36011deg) rotateZ(3600deg) scale(2.5) translateY(-1210px)";

rollBtn.addEventListener("click", () => {
  roll();
});

document.body.onkeyup = function (e) {
  if (e.keyCode == 32) {
    roll();
  }
};

function roll() {
  let thisRollNum = 1 + Math.floor(6 * Math.random());
  // thisRollNum = 6
  dice.style.transform =
    "rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateY(0px)";

  setTimeout(() => {
    let newX = 720;
    let newY = 720;
    let newZ = 720;

    if (thisRollNum == 1) {
      newX += 180;
      newY += 180;
      newZ += 180;
    }
    if (thisRollNum == 2) {
      newX += 180;
      newY += 270;
      newZ += 90;
    }
    if (thisRollNum == 3) {
      newX += -90;
      newY += 270;
      newZ += 90;
    }
    if (thisRollNum == 4) {
      newX += -90;
      newY += 180;
      newZ += 270;
    }
    if (thisRollNum == 5) {
      newX += 90;
      newY += -180;
      newZ += 180;
    }
    if (thisRollNum == 6) {
      newX += 180;
      newY += 0;
      newZ += 0;
    }

    let newTransform = `rotateX(${newX}deg) rotateY(${newY}deg) rotateZ(${newZ}deg)`;
    dice.style.transform = newTransform;
  }, 500);
}
