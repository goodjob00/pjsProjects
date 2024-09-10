var pjs = new PointJS(640, 480, {
  backgroundColor: '#ffffff'
});


var game = pjs.game;

var tiles = pjs.tiles;
var key = pjs.keyControl.initControl();

let flag = false;

var player = game.newAnimationObject({
  animation: tiles.newImage("resources/animationCharacters/peasant/peasant_Attack_514_290_17_3.png").getAnimation(0, 0, 514, 290, 17),
  x: 0,
  y: 0,
  w: 514 / 1.5,
  h: 290 / 1.5,
  delay: 3,

})


let animWalk = tiles.newImage("resources/animationCharacters/peasant/peasant_walk_514_290_14_3.png").getAnimation(0, 0, 514, 290, 14);

game.newLoop('myGame', function () {

  if (key.isPress("D")) {
    player.setFlip(0, 0);
    flag = false;
    player.setAnimation(animWalk);
  } else if (key.isPress("A")) {
    player.setFlip(1, 0);
    flag = false;
    player.setAnimation(animWalk);
  }
  if (key.isDown("D")) {
    player.x += 3;
  } else if (key.isDown("A")) {
    player.x -= 3;
  } else {
    if (flag == false) {
      player.setAnimation(tiles.newImage("resources/animationCharacters/peasant/peasant_Attack_514_290_17_3.png")
        .getAnimation(0, 0, 514, 290, 17));
      flag = true;
    }
  }

  player.draw()


});

game.setLoop('myGame');
game.start();