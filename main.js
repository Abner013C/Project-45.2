//declaracion de variables para la carga de imagenes
var playertest, playertestimg;
var kingimg, kinaimg, pallyimg, mageimg, dragonimg;
//declaracion de variables necesarias
//var player1;
var traveler1, traveler2, allTravelers;
var database, canvas;
var gameState= 0;
var playerCount= 0;
var form, game, player, allPlayers;

var mainimgmale, mainimgfemale;


function preload(){
    //carga de imagenes correspondientes
    //playertestimg= loadImage("../Images/testcreature.png");
    //kingimg= loadAnimation("../Images/Enemies/kingvaed1.png","../Images/Enemies/kingvaed2.png");
    //kinaimg= loadAnimation("../Images/Enemies/enemykina1.png","../Images/Enemies/enemykina2.png");
    //pallyimg= loadAnimation("../Images/Enemies/enemypaladin1.png","../Images/Enemies/enemypaladin2.png");
    //mageimg= loadAnimation("../Images/Enemies/enemywizard1.png","../Images/Enemies/enemywizard2.png");
    //dragonimg= loadAnimation("../Images/Enemies/dragon1.png","../Images/Enemies/dragon2.png");
    mainimgmale= loadAnimation("Images/mainmale1.png","Images/mainmale2.png");
    mainimgfemale= loadAnimation("Images/mainfemale1.png","Images/mainfemale2.png");
}

function setup(){
    database= firebase.database();
    canvas= createCanvas(displayWidth, displayHeight);
    //setup de cosas como la carga de un nuevo juego
    game= new Game();
    game.getState();
    game.start();
}

function draw(){
    //llamada de funciones previamente declaradas en form, game, etc
    background("lightgray");
    if(playerCount === 2){
        game.updateGS(1);
    }
    if(gameState === 1){
        clear();
        game.play();
    }
}