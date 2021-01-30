
var garden,gardenImage;
var cat,catImage;
var mouse,mouseImage;


function preload() {
    //load the images here
    gardenImage=loadImage("images/garden.png");  
    catImage=loadImage("images/cat2.png");  
    mouseImage=loadImage("images/mouse2.png"); 
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden = createSprite(250,300,400,400);
    garden.addImage(gardenImage);
    garden.scale=1.0;
    
    cat=createSprite(480,600,20,50);
    cat.addImage(catImage);
    cat.scale=0.1
    
    mouse=createSprite(100,600,50,300);  
    mouse.addImage(mouseImage);
    mouse.scale=0.1
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    cat.velocityX=-3;
  
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
