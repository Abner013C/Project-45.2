class Player{
    constructor(){
        this.xaxis= 0;
        this.yaxis= 0;
        this.name= null;
        this.score= null;
        this.index= null;
    }
    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data) => {
            playerCount = data.val();
        })
    }

    updateCount(count){
        database.ref('/').update({
            playerCount: count
        });
    }

    update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            score: this.score,
            xaxis: this.xaxis,
            yaxis: this.yaxis
        });
    }

    static getPlayerInfo(){
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }

    
}
    //createCharacters(){
      //  playertest= createSprite(300,300,32,32);
        //playertest.shapeColor= "black";
        //playertest.addImage("test", playertestimg);
        //playertest.scale= 2;


        //for some reason the following movement patten dont work!
            //velocityx & y
            //x+x y+x
            //keycode + x+x && y+y
            //keyisdown + x+x y+y
            //keydown +  x+x y+y
        //console.log(playertest.x+","+playertest.y);
    //}

//}

//creacion de los presonajes jugables, y sus diferentes caracteristicas

        //funcion de update
        //getgamestate
        //getplayercount
        //create player sprites
            //images
        //movement conditions, animations
        //display