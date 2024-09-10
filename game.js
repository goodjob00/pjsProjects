var pjs = new PointJS(640, 480, {
  backgroundColor: '#ffffff'
});
 
pjs.system.initFullPage();
var game = pjs.game;
var point = pjs.vector.point;
 
 
game.newLoop('myGame', function () {
  

  
});
 
game.setLoop('myGame');
game.start();
