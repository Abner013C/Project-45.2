class Form{
    constructor(){
        this.input = createInput("Enter your alias for the game");// campo para el nombre
        this.reset = createButton('Reset');// boton de reinicio
        this.button = createButton('Play');// boton para jugar
        this.greeting = createElement('h2');// texto de saludo
        this.title = createElement('h2'); //titulo del juego
    }

    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }

    display(){
        this.title.html("TRAVELERS");
        this.title.position(displayWidth/3, 50); //350, 50 || 575, 50
        this.title.style('font-size', '70px');
        this.title.style('color', 'black'); //skyblue
        this.input.position(displayWidth/2.5,400); //550, 400 || 750, 400
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');
        this.button.position(displayWidth/2.48,430); //560, 500 || 755, 500
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightpink');
        this.reset.position(displayWidth-1250, 20); //900, 660 || 370, 120
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'red');

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Welcome " + player.name);
            this.greeting.position(displayWidth/3,250); //400, 250 || 700, 250
            this.greeting.style('color', 'darkgrey');
            this.greeting.style('font-size', '60px');
        });

        this.reset.mousePressed(() => {
            //add code to reset the values of the gameState and the playerCount nodes to 0 in the database
            player.updateCount(0);
            game.updateGS(0);
            var playerInfoRef= database.ref('players');
            playerInfoRef.remove();
        });
    }
}
            //give them styles or images