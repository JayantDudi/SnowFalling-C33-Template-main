const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var rand;


var boy;
var sno_1;

var drops = [];
var maxDrops=100;


function preload(){
  sno_1 = loadImage("snow3.jpg");

}



function setup() {
  createCanvas(900,550);

  
 

 for(i = 0; i< maxDrops ; i =i+1){
  rainDrop = new Drop(random(0,400), random(0,50));
  drops.push(rainDrop);
}

boy = createSprite(400,200,20,20);
boy.addImage(sno_1,sno_1);
 
}

function draw() {
   background("black");
  drawSprites();
}