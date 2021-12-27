class Game{
    constructor(){
        //creacion de todos los elemntos jugables e interactuables como el mapa
        //estados del juego: 0: formulario, pantalla principal, 1: comienzo del juego y todos los elementos
        //2: fin del juego por muerte, 3: fin del juego por victoria
        //end
    }

    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
    }

    updateGS(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
        //si el estado del juego es igual a 0, crear un nuevo jugador y un nuevo formulario
        if(gameState === 0){
          player = new Player();
          var playerCountRef = await database.ref('playerCount').once("value");
          if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
          }
          form = new Form();
          form.display();
        }
        traveler1= createSprite(400, 400);
        traveler1.addAnimation("testanim", mainimgmale);
        traveler1.scale= 2.3;
        traveler1.frameDelay= 25;
        traveler2= createSprite(800, 400);
        traveler2.addAnimation("testanim2", mainimgfemale);
        traveler2.scale= 2.3;
        traveler2.frameDelay= 25;
        allTravelers= [traveler1, traveler2];

    }

    play(){
      form.hide();

      Player.getPlayerInfo();
  
      if(allPlayers !== undefined){
        background("black");

          //test text to prove game state 1 is working
          fill("white");
          textSize(30);
          text("gameState1 successful", 500, 500);

          //player1= new Player();
          //player1.createCharacters();


          drawSprites();
      }
   }    
}