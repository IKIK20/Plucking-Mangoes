
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boyIm, treeIm;

function preload()
{
	boyIm=loadImage("boy.png")
	treeIm=loadImage("tree.png")
}

function setup() {
	createCanvas(1400, 800);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground (700,750,1400,20);
	stone= new Stone (200,615)

	slingshot = new SlingShot(stone.body,{x:300, y:515});
	mango1= new Mangoes(1200,250,60,PI/2)
	mango2= new Mangoes(1150,300,60,PI/2)
	mango3= new Mangoes(1260,240,60,PI/2)
	mango4= new Mangoes(1350,330,60,PI/2)
	mango5= new Mangoes(1280,390,60,PI/2)
	mango6= new Mangoes(1100,390,60,PI/2)
	mango7= new Mangoes(1210,380,60,PI/2)
	mango8= new Mangoes(1280,330,60,PI/2)
	mango9= new Mangoes(1150,370,60,PI/2)
	mango10= new Mangoes(1350,390,60,PI/2)
	mango11= new Mangoes(1050,370,60,PI/2)
  
}


function draw() {

  Engine.update(engine)
  background("lightyellow");
  
  image(boyIm,270,410,300,300)
  image(treeIm,1000,200,400,500)

  ground.display()
  stone.display()
  slingshot.display()

  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  mango8.display()
  mango9.display()
  mango10.display()
  mango11.display()

//   detectCollision(stone,mango1)
//   detectCollision(stone,mango2)
//   detectCollision(stone,mango3)
//   detectCollision(stone,mango4)
//   detectCollision(stone,mango5)
//   detectCollision(stone,mango6)
//   detectCollision(stone,mango7)
//   detectCollision(stone,mango8)
//   detectCollision(stone,mango9)
//   detectCollision(stone,mango10)
//   detectCollision(stone,mango11)
 
 
  //line(stone.body.position.x,stone.body.position.y,200,515)

 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
	if(keyCode===32){
	  Matter.Body.setPosition(stone.body,{x:235, y:420}) 
	  slingshot.attach(stone.body)
	}
}

// Also Ma'am ,for some reason, it shows that on line 102 (var distance....) it cannot read property x of undefined

// function detectCollision(lstone,lmango){
// 	mangoBodyPosition=lmango.body.setPosition
// 	stoneBodyPosition=lstone.body.setPosition
// 	var distance= dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
// 	if(distance<=lmango.r+lstone.r){
// 		Matter.Body.setStatic(lmango.body,false)
// 	}
// }


