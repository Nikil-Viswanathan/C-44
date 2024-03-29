
var gameState = "Forest"; 
var Player , PlayerAnim;
var Player2 , Player2Anim;
var bg,bgImg ,bg2,bgImg2;
var Enemy1 , Enemy1Anim;
var Enemy2 , Enemy2Anim;
var map, mapImg;
var sword , swordImg;
var ground , invisground;
var PlayerHeartImg , BlueHeartImg , PlayerHeart , BlueHeart;
var PlayerHealth = 3;
var BlueGhostHealth =3;
var COUNT = 1;
var song;
var mark , desertmark;


function preload(){
    PlayerAnim=loadAnimation("Player/P1.png","Player/P2.png","Player/P3.jpg");
    Player2Anim=loadAnimation("NinjaPlayer1.png" , "NinjaPlayer2.png" , "NinjaPlayer3.png" , "NinjaPlayer4.png");
    bgImg = loadImage("Forest.jpg");
    bgImg2 =loadImage("Background2.png");
    Enemy1Anim = loadAnimation("EnemyNo1/Enemy1.png" , "EnemyNo1/Enemy2.png" , "EnemyNo1/Enemy3.png" , "EnemyNo1/Enemy4.png" , "EnemyNo1/Enemy5.png"
    , "Enemy1Attack/Enemy1Attack1.png", "Enemy1Attack/Enemy1Attack2.png", "Enemy1Attack/Enemy1Attack3.png", "Enemy1Attack/Enemy1Attack4.png", "Enemy1Attack/Enemy1Attack5.png"
    , "Enemy1Attack/Enemy1Attack6.png", "Enemy1Attack/Enemy1Attack7.png", "Enemy1Attack/Enemy1Attack8.png", "Enemy1Attack/Enemy1Attack9.png", "Enemy1Attack/Enemy1Attack10.png"
    , "Enemy1Attack/Enemy1Attack11.png", "Enemy1Attack/Enemy1Attack12.png", "Enemy1Attack/Enemy1Attack13.png")
    Enemy2Anim =loadAnimation("EnemyNo2/2Enemy1.png","EnemyNo2/2Enemy2.png","EnemyNo2/2Enemy3.png","EnemyNo2/2Enemy4.png","EnemyNo2/2Enemy5.png","EnemyNo2/2Enemy6.png","EnemyNo2/2Enemy7.png","EnemyNo2/2Enemy8.png","EnemyNo2/2Enemy9.png","EnemyNo2/2Enemy10.png","EnemyNo2/2Enemy11.png","EnemyNo2/2Enemy12.png","EnemyNo2/2Enemy13.png","EnemyNo2/2Enemy14.png","EnemyNo2/2Enemy15.png","EnemyNo2/2Enemy16.png","EnemyNo2/2Enemy17.png","EnemyNo2/2Enemy18.png","EnemyNo2/2Enemy19.png","EnemyNo2/2Enemy20.png")
    mapImg = loadImage("map1.jpg");
    swordImg = loadImage("Sword.png");
    PlayerHeartImg = loadImage("GameHeart.png");
    BlueHeartImg = loadImage("GameHeartBlue.png");
    //song = loadSound("Forest Background Music.mp3");
}



function setup(){
createCanvas(displayWidth - 20 , displayHeight -20);
    bg = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight)
    bg.addImage(bgImg);
    bg.scale = 3.5
    bg2 = createSprite(displayWidth/2  , displayHeight/2,  displayWidth-100 ,displayHeight-70 );
    bg2.addImage(bgImg2);
    bg2.scale = 2.5;
    sword = createSprite(100 , 100 ,10 ,10);
    sword.addImage(swordImg);
    sword.scale = 0.1;
        sword.visible = false;
    Player = createSprite(displayWidth/2 - 400 , displayHeight - 230 , 50 ,50)
    Player.addAnimation("PlayerImg" , PlayerAnim);
   Player2 = createSprite(displayWidth/2 - 400 , displayHeight - 230 , 50 , 50)
    Player2.addAnimation("Player2Img" , Player2Anim);
    Enemy1 = createSprite(displayWidth/2 + 70 , displayHeight - 300 ,50,50);
    Enemy1.scale = 2;
    Enemy1.addAnimation("Enemy1Img" , Enemy1Anim );
    Enemy1.debug = true;
    Enemy1.setCollider("Rectangle" , 0 , 0 , 100 , 100);
//Enemy2 = createSprite(displayWidth/2 + 70 , displayHeight - 300 ,50 ,50);
//Enemy2.scale = 1.5;
//Enemy2.addAnimation("Enemy2Img" , Enemy2Anim);
map = createSprite(displayWidth/2 - 650 , displayHeight - 760 ,200, 200);
map.addImage(mapImg)
map.scale =0.3;
PlayerHeart = createSprite(displayWidth/2 - 400 ,100 , 10 ,10);
PlayerHeart.addImage(PlayerHeartImg);
PlayerHeart.scale = 0.3;
PlayerHeart2 = createSprite(displayWidth/2 - 300 ,100 , 10 ,10);
PlayerHeart2.addImage(PlayerHeartImg);
PlayerHeart2.scale = 0.3;
PlayerHeart3 = createSprite(displayWidth/2 - 200 ,100 , 10 ,10);
PlayerHeart3.addImage(PlayerHeartImg);
PlayerHeart3.scale = 0.3;
BlueHeart = createSprite(displayWidth/2 + 400 , 100 ,10 ,10);
BlueHeart.addImage(BlueHeartImg);
BlueHeart.scale=0.3;
BlueHeart2 = createSprite(displayWidth/2 + 300 , 100 ,10 ,10);
BlueHeart2.addImage(BlueHeartImg);
BlueHeart2.scale=0.3;
BlueHeart3 = createSprite(displayWidth/2 + 500 , 100 ,10 ,10);
BlueHeart3.addImage(BlueHeartImg);
BlueHeart3.scale=0.3;
mark = createSprite(200 , 178 , 10,10);
mark.shapeColor="red";
    

invisground = createSprite(displayWidth/2,displayHeight-150,displayWidth,10);
invisground.visible = false;
}
function draw(){
 
//song.play();
background(0);
if(gameState === "Forest"){
    Player2.visible = false;
    bg2.visible = false;
if(sword.collide(Enemy1)){
COUNT = 0;
}
if(COUNT === 0){
    BlueGhostHealth = BlueGhostHealth - 1;
    COUNT = 1;
}

if(keyWentDown(RIGHT_ARROW)){
    //Player.x=Player.x+5;
    Player.velocityX = 10
}
if(keyWentUp(RIGHT_ARROW)){
    Player.velocityX = 0;
}
if(keyWentDown(LEFT_ARROW)){
   // Player.x = Player.x -5;
   Player.velocityX = -10;
}
if(keyWentUp(LEFT_ARROW)){
    Player.velocityX = 0;
}
if(keyWentDown(UP_ARROW)&& Player.y > 642){

    Player.velocityY = -10;
}
Player.velocityY = Player.velocityY + 0.5;

if(keyWentUp("k")){
    sword.visible = true;
sword.x = Player.x + 90;
sword.y = Player.y - 30;
}
if(keyWentDown("k")){
    sword.visible = false;

}
if(PlayerHealth === 3){
    PlayerHeart.visible = true;
    PlayerHeart2.visible = true;
    PlayerHeart3.visible = true;
}
if(PlayerHealth === 2){
    PlayerHeart3.visible = false;

}
if(PlayerHealth === 1){
    PlayerHeart2.visible = false;
}
if(PlayerHealth === 0){
    PlayerHeart.visible = false;
    //gameState = "Gameover";
}
if(BlueGhostHealth === 3){
    BlueHeart.visible = true;
    BlueHeart2.visible = true;
    BlueHeart3.visible = true;
}
if(BlueGhostHealth === 2){
    BlueHeart3.visible = false;

}
if(BlueGhostHealth === 1){
    BlueHeart2.visible = false;
}
if(BlueGhostHealth === 0){
    BlueHeart.visible = false;
    Enemy1.destroy();
    gameState = "Desert"
}
}
if(gameState === "Desert"){
    /*bg.changeImage(bgImg2);
    Player.addAnimation("Player2Img" , Player2Anim);*/
    mark.x = 189;
    mark.y = 99;
    Player.destroy();
    Player2.visible = true;
    bg.destroy();
    bg2.visible = true;
    sword.destroy();
}
Player.collide(invisground);
console.log(mouseX);
console.log(mouseY);

drawSprites();
}
