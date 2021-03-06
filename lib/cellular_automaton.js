const Game = require("./game");
const GameView = require("./game_view");

document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementsByTagName("canvas")[0];
  canvasEl.width = Game.DIM_X;
  canvasEl.height = Game.DIM_Y;

  const ctx = canvasEl.getContext("2d");
  const game = new Game();
  const gameView = new GameView(game, ctx)
  gameView.game.setup();
  let rate = 60;
  let rain = false;
  gameView.start(rate, rain);

  document.addEventListener("keydown", function(e){
    const code = e.keyCode

    if (code === 87) {
      rain = true;
      gameView.start(rate, rain);
    } else if (code === 83) {
      rain = false;
      gameView.start(rate, rain);
    } else if (code === 68) {
      if (rate <= 90) {
        rate += 10;
        gameView.start(rate, rain);
      }
    } else if (code === 65) {
      if (rate > 10) {
        rate -= 10;
        gameView.start(rate, rain);
      }
    }
  })

  canvasEl.addEventListener("click", gameView.restart.bind(gameView), false);
});
