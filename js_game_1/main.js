const player = document.getElementById("player");
const moveSize = 24;
let playerWalk = 0;

document.addEventListener("keydown", function (event) {
  if (event.code == "ArrowUp") {
    if (player.offsetTop >= 24) {
      playerWalk = playerWalk + 1;
      if (playerWalk % 2 == 1) {
        player.style.backgroundImage = "url('img/dos.png')";
      } else {
        player.style.backgroundImage = "url('img/dos2.png')";
      }
      player.style.top = player.offsetTop - moveSize + "px";
    }
  } else if (event.code == "ArrowRight") {
    if (player.offsetLeft <= 720) {
      playerWalk = playerWalk + 1;
      if (playerWalk % 2 == 1) {
        player.style.backgroundImage = "url('img/droite.png')";
      } else {
        player.style.backgroundImage = "url('img/droite2.png')";
      }
      player.style.left = player.offsetLeft + moveSize + "px";
    }
  } else if (event.code == "ArrowDown") {
    if (player.offsetTop <= 720) {
      playerWalk = playerWalk + 1;
      if (playerWalk % 2 == 1) {
        player.style.backgroundImage = "url('img/face.png')";
      } else {
        player.style.backgroundImage = "url('img/face2.png')";
      }
      player.style.top = player.offsetTop + moveSize + "px";
      console.log(player.style.top);
    }
  } else if (event.code == "ArrowLeft") {
    if (player.offsetLeft >= 24) {
      playerWalk = playerWalk + 1;
      if (playerWalk % 2 == 1) {
        player.style.backgroundImage = "url('img/gauche.png')";
      } else {
        player.style.backgroundImage = "url('img/gauche2.png')";
      }
      player.style.left = player.offsetLeft - moveSize + "px";
    }
  }
});
