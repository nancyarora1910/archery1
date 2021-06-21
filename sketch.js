const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var angle,player,ComputerBase;

function preload() {
  //base1Img = loadImage("./assets/base1.png")
  //base2Img = loadImage("./assets/base2.png")
  
}


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   Computer = new ComputerBase(250,300,150,30)
   //player = new PlayerBase(300,200,150,30)

 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
     Computer.show()
     //PlayerBase.show()

   //display Player and computerplayer


}
