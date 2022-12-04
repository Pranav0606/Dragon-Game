// Home Section Script
let character = document.getElementById("character"); //Charcter

let enemy = document.getElementById("enemy"); // Enemy/ object

let gameovercontainer = document.getElementById("gameover-menu"); //Game-over Displayer

let restart = document.getElementById("restart"); // Game-over Displayers - Resert btn

let quit = document.getElementById("quit"); // Game-over Displayers - quit btn

let gotohome = document.getElementById("gotohome"); // Game-over Displayers - home btn

let window_game = document.getElementById("game-runner"); // Main _game Displayer

let startup = document.getElementById("start-up"); // Start-Up Menu

let gameovebackground = document.getElementById("gameovebackground"); // Game-Ove Bg img

let whiteh1 = document.getElementById("white-h1"); // To give a stroke like effect in a txt of game-over

let blackgameover = document.getElementById("black-game-over");

let score = document.getElementById("_scorecont"); // Score Displayer

let gamename = document.getElementById("game-name"); // Game_name i.e. Dragon Game

let howtoplaybtn = document.getElementById("how-to-play"); // Startup menu Btn How To play

let rules = document.getElementById("_rules"); // Rules Displayer or Rules Page

let goback = document.getElementById("go-back"); // Rules Page Go back Btn

let highscore = document.getElementById("highscore"); // Highscore Displayer

let characterScore = 0;

let highscoreincrease = characterScore;

let cross = true;

document.onkeydown = function (e) {
  console.log("The Keycode is", e.keyCode);
  if (e.keyCode == 38) {
    character.classList.add("animated-character");
    setTimeout(() => {
      character.classList.remove("animated-character");
    }, 800);
  }

  if (e.keyCode == 39) {
    left = parseInt(
      window.getComputedStyle(character, null).getPropertyValue("left")
    );
    character.style.left = left + 200 + "px";
  }

  if (e.keyCode == 37) {
    left = parseInt(
      window.getComputedStyle(character, null).getPropertyValue("left")
    );
    character.style.left = left - 200 + "px";
  }

  setInterval(() => {
    let character_X = parseInt(
      window.getComputedStyle(character, null).getPropertyValue("left")
    );
    let character_Y = parseInt(
      window.getComputedStyle(character, null).getPropertyValue("top")
    );
    let Enemy_X = parseInt(
      window.getComputedStyle(enemy, null).getPropertyValue("left")
    );
    let Enemy_Y = parseInt(
      window.getComputedStyle(enemy, null).getPropertyValue("top")
    );

    offset_X = Math.abs(character_X - Enemy_X);
    offset_Y = Math.abs(character_Y - Enemy_Y);

    // Game Over Displayer Area Code//;
    // Game Over code for displaying Game-over menu;

    if (offset_X < 123 && offset_Y < 100) {
      enemy.style.display = "none";
      gameovercontainer.style.display = "block";
      gameovercontainer.style.zIndex = "5";
      window_game.style.display = "none";
      gameovebackground.style.display = "block";
      whiteh1.style.display = "block";
      gamename.style.display = "block";
    } else if (cross && offset_X < 145) {
      cross = false;
      characterScore++;
      score.innerHTML = "Your Score : " + "0" + characterScore;
      setTimeout(() => {
        cross = true;
      }, 1000);
      if ((highscore.innerHTML = "00")) {
        highscore.innerHTML = "High Score : " + "0" + characterScore;
      } else if ((highscore.innerHTML = characterScore)) {
        highscore.innerHTML = highscoreincrease;
      }
    }
  }, 100);
};

// Start-Up Section i.e. btn code;

document.querySelector(".btn").addEventListener("click", () => {
  window_game.style.display = "block";
  gamename.style.display = "none";
  startup.style.opacity = "0";
  startup.style.zIndex = "10";
  startup.style.transition = "all 0.2s";
  startup.style.display = "none";
});

// Displaying How to play list;-->
howtoplaybtn.addEventListener("click", () => {
  startup.style.opacity = "0";
  startup.style.transition = "all 0.2s";
  startup.style.transform = "scale(0.5)";
  rules.style.display = "block";
  gamename.style.display = "none";
  whiteh1.style.display = "none";
  blackgameover.style.display = "none";
});

goback.addEventListener("click", () => {
  startup.style.opacity = "1";
  startup.style.transition = "all 0.2s";
  startup.style.transform = "scale(1)";
  rules.style.display = "none";
  gamename.style.display = "block";
});

// Game Over Page Btns:

restart.addEventListener("click", () => {
  gameovercontainer.style.display = "none";
  whiteh1.style.display = "none";
  gameovebackground.style.display = "none";
  window_game.style.display = "block";
  enemy.style.display = "block";
  gamename.style.display = "none";
  score.innerHTML = "Your Score: " + "00";
  characterScore = 0;
  character.style.left = "200px";
});

quit.addEventListener("click", () => {
  window.close("http://127.0.0.1:5500/index.html");
});

gotohome.addEventListener("click", () => {
  startup.style.display = "flex";
  startup.style.opacity = "1";
  startup.style.visibility = "visible";
  gameovebackground.style.display = "none";
  gamename.style.display = "block";
  gamename.style.zIndex = "10";
  gamename.style.opacity = "1";
  gameovercontainer.style.display = "none";
  whiteh1.style.display = "none";
  enemy.style.display = "block";
  characterScore = 0;
});