var gameState = 0;
var canvas,database,playerCount,form,game,player;
function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  console.log(database);
  game = new Game();
  game.getState();
  game.start();

}

function draw(){
}
