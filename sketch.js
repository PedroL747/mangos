
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var manga,mangas,mangad,mangaf,mangag,mangah,mangaj,mangak,mangal,mangaz,mangax,mangac;
var world,boy;
var launchingForce=100;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	stoneObj=new stone(235,420,30); 

	manga=new mango(1100,100,30);
  mangas=new mango(1170,130,30);
	mangad=new mango(1010,140,30);
	mangaf=new mango(1000,70,30);
	mangag=new mango(1100,70,30);
	mangah=new mango(1000,230,30);
	mangaj=new mango(900,230,25);
	mangak=new mango(1140,150,25);
	mangal=new mango(1100,230,25);
	mangaz=new mango(1200,200,25);
	mangax=new mango(1120,50,25);
	mangac=new mango(900,160,25);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	launcherObject=new launcher(stoneObj.body,{x:235,y:420})

	Engine.run(engine);

}

function draw() {

  background(230);

  textSize(25);
  text("Press Space to take the stone",50 ,50);
  image(boy ,200,340,200,300);

  

  treeObj.display();
  stoneObj.display();
  manga.display();
  mangas.display();
  mangad.display();
  mangaf.display();
  mangag.display();
 mangah.display();
  mangaj.display();
  mangak.display();
  mangal.display();
  mangaz.display();
  mangax.display();
  mangac.display()
  stoneObj.display();

  groundObject.display();
  launcherObject.display();
  detectollision(stoneObj,manga);
  detectollision(stoneObj,mangas);
  detectollision(stoneObj,mangad);
  detectollision(stoneObj,mangaf);
  detectollision(stoneObj,mangag);
  detectollision(stoneObj,mangah);
  detectollision(stoneObj,mangaj);
  detectollision(stoneObj,mangak);
  detectollision(stoneObj,mangal);
  detectollision(stoneObj,mangaz);
  detectollision(stoneObj,mangax);
  detectollision(stoneObj,mangac);
}

function mouseDragged()
{
	Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcherObject.fly();
  
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 
	  launcherObject.attach(stoneObj.body);
	}
  }

  function detectollision(lstone,lmango){

  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)

  	if(distance<=lmango.r+lstone.r)
    {
   
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }