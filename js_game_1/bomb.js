let bomb = document.getElementById("bomb");
let enemy_0 = document.getElementById("enemy-0");
document.addEventListener("keydown", function (event) {
  if (event.code == "Space") {
    bomb.style.display = "block";
    bomb.style.top = player.offsetTop + "px";
    bomb.style.left = player.offsetLeft + "px";
    setTimeout(
      () => (bomb.style.backgroundImage = "url('img/openPokeball.png')"),
      500
    );
    setTimeout(
      () => (bomb.style.backgroundImage = "url(img/etoile.png')"),
      1000
    );
    setTimeout(
      () => (bomb.style.backgroundImage = "url('img/pokeball.png')"),
      1500
    );
    setTimeout(() => (bomb.style.display = "none"), 2000);
  }
  if (
    enemy_0.offsetTop == bomb.offsetTop &&
    enemy_0.offsetLeft == bomb.offsetLeft
  ) {
    enemy_0.style;
  }
});
