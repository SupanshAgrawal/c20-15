var jerry
var tom,tomimage
var back,backimage
var ground
var jerryimg1,jerryimg2,jerryimg3;
var tomimg1,tomimg2,tomimg3;


function preload() {
backimage =loadImage("images/garden.png");
jerryimg1=loadAnimation("images/jerryOne.png");
jeeryimg2=loadAnimation("images/jerryTwo.png","images/jerryThree.png");
jerryimg3=loadAnimation("images/jerryFour.png");

tomimg1=loadAnimation("images/tomOne.png");
tomimg2=loadAnimation("images/tomTwo.png","images/tomThree.png");
tomimg3=loadAnimation("images/tomFour.png");
}

function setup(){
    createCanvas(1000,800);
    
    tom=createSprite(800,500,10,10);
    tom.scale=1;
    tom.addAnimation(tomimg1);


    jerry=createSprite(800,500,10,10);
    jerry.scale=1;
    jerry.addAnimation(jerryimg1);
    
    
     
  ground=createSprite(800,600,600,100);
  ground.scale=1;
  ground.visible=false;

}

function draw() {

    background(backimage);
    //Write condition here to evalute if tom and jerry collide

    



    tom.collide(ground);
    jerry.collide(ground);
    drawSprites();
}


function keyPressed(){

  if (keyCode ===LEFT_ARROW){
tom.velocityX=-5;
tom.addAnimation(tomimg2)
tom.changeAnimation(tomimg3)
jerry.addAnimation(jerryimg2)
jerry.changeAnimation(jerryimg3)

  }


}
