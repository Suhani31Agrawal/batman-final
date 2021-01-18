const Bodies=Matter.Bodies;
const World=Matter.World;
const Engine=Matter.Engine;
const Body=Matter.Body;

var boy,boyImage;
var drops=[]
var lightening,light1,light2,light3,light4;

function preload(){
    boyImage=loadAnimation("images/Walking Frame/walking_8.png","images/Walking Frame/walking_7.png","images/Walking Frame/walking_6.png","images/Walking Frame/walking_5.png","images/Walking Frame/walking_4.png","images/Walking Frame/walking_3.png","images/Walking Frame/walking_2.png","images/Walking Frame/walking_1.png")
    light1=loadImage("images/thunderbolt/1.png")
    light2=loadImage("images/thunderbolt/2.png")
    light3=loadImage("images/thunderbolt/3.png")
    light4=loadImage("images/thunderbolt/4.png")
}

function setup(){
    createCanvas(600,800)

    engine=Engine.create();
  world=engine.world;

  ground=new Ground(300,760,600,50)
  
   boy=createSprite(300,600,2,2)
    boy.addAnimation("batman",boyImage)
    boy.scale=0.5;
}

function draw(){
    background(0)
    Engine.update(engine)

    if(frameCount%4 === 0){ 
        var posX=Math.round(random(20,580)) 
        var drop = new Drop(posX,0,6) 
        drops.push(drop);
     }

    for(var l=0; l< drops.length; l++){ 
        drops[l].display();
    }
    ground.display()
    thunder();
    drawSprites();
}   

function thunder(){
    if(frameCount % 60 === 0) {
        var lightening = createSprite(600,165,10,40);
        lightening.x=Math.round(random(100,500))
        lightening.scale=0.7;
        lightening.lifetime=50;
        var rand = Math.round(random(1,4));
        switch(rand) {
          case 1: lightening.addImage(light1);
                  break;
          case 2: lightening.addImage(light2);
                  break;
          case 3:lightening.addImage(light3);
                  break;
          case 4:lightening.addImage(light4);
                  break;
          default: break;
        }
    }
}

