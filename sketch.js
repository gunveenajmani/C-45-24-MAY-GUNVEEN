const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var w1, w2, w3, w4, w5, w6;
var w7,w8,w9,w10;
var i1, i2;
var girl;
var bg1;
var health=0;
function preload() {
   bg1 = loadImage("sprites/bg1.png")
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
     
    w1 = new Wall(50, 70, 50, 300)
    w2 = new Wall(350, 170, 50, 300)
    w3 = new Wall(550, 270, 50, 300)
    w4 = new Wall(750, 470, 300, 30)
    w5 = new Wall(750, 650, 300, 30)
    w6 = new Wall(1050, 400, 50, 300)
    w7 = new Wall(100, 380, 300, 30)
    w8 = new Wall(500, 600, 300, 30)

    girl = new Girl(600, 300, 50, 100);

    i1 = new Insect(750, 550, 70, 70);
    i2 = new Insect(500, 200, 70, 70);

    immunity1 = new Immunity(200, 300, 40, 40);
}

function draw(){
    background(bg1);
    textSize(20);
    fill("white")
    text("HEALTH SCORE:"+health, 1000,30)
    Engine.update(engine);
    
    w1.display();
    w2.display();
    w3.display();
    w4.display();
    w5.display();
    w6.display();
    w7.display();
    w8.display();

    girl.display();

    i1.display();
    i2.display();

    immunity1.display();
}
/*
function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
*/

function keyPressed(){
    if(keyCode===LEFT_ARROW){
     girl.body.position.x -= 50;
    }
    if(keyCode===RIGHT_ARROW){
    girl.body.position.x += 50;
    }
    if(keyCode===UP_ARROW){
        girl.body.position.y -= 50;
    }
    if(keyCode===DOWN_ARROW){
        girl.body.position.y += 50;
    }
}