( function(){
	
	"use strict";
    console.log('reading.js')
	/* 
	This gets the player: gameData.players[gameData.index]
	This gets the first die: gameData.dice[gameData.roll1-1]
	This gets the second die: gameData.dice[gameData.roll2-1]
	This gets the HP of the current player: gameData.HP[gameData.index]
	*/

	let gameData = {
		players: ['Pink Kirby', 'Green Kirby'],
		HP: [25, 25],
		index: 0,
		gameEnd: 0
	};

	const gameAlerts = document.querySelector('#gameAlerts p');
	const HP = document.querySelectorAll('.hp');
    const header = document.querySelector('header'); 
    const headerText = document.querySelector('header p');
    const smack = document.querySelector('#smack');
    const audio = new Audio("sound/face-punch-91909.mp3")

    //start game by deciding who's turn it is, Pink Kirby is index = 0 and Green Kirby is index = 1
    gameData.index = Math.round(Math.random());

    gameAlerts.innerHTML = 'Smack the other Kirby to 0 HP to win!';

    document.getElementById('quit').addEventListener('click', function () {
        location.reload();
    });

    setUpTurn();

	function setUpTurn() {
        console.log(`it's ${gameData.players[gameData.index]}'s turn`);
        let greenKirbyHP = gameData.HP[1];
        let pinkKirbyHP = gameData.HP[0];

        //Pink Kirby Turn
        if (gameData.players[gameData.index] == "Pink Kirby"){
            gameAlerts.innerHTML = `Roll the dice for ${gameData.players[0]}`;
            document.querySelector('#kirbyTurn').innerHTML = `${gameData.players[0]}'s Turn`;
            header.style.backgroundColor = "#B5506F";
            document.querySelector('#smack').style.backgroundColor = "#B5506F";
        }
        //Green Kirby Turn
        else if (gameData.players[gameData.index] == "Green Kirby"){
            gameAlerts.innerHTML = `Roll the dice for ${gameData.players[1]}`;
            document.querySelector('#kirbyTurn').innerHTML = `${gameData.players[1]}'s Turn`;
            header.style.backgroundColor = "#7D9E67";
            document.querySelector('#smack').style.backgroundColor = "#7D9E67";
        }
		smack.addEventListener('click', damageRoll);
        smack.addEventListener('click', function(){
            audio.play; 
        })

    };


    //calculates how much damage you do 
	function damageRoll(){
		gameData.roll = Math.floor(Math.random() * 6) + 1; //using ceil could result in a zero

		// if player rolls a 1
		if( gameData.roll <= 1 ){ 
			gameAlerts.innerHTML = 'You missed! Switching turns...';
			gameData.index ? (gameData.index = 0) : (gameData.index = 1);
			setTimeout(setUpTurn, 2000);
		}

		// if player rolls anything else
		else { 
            if (gameData.players[gameData.index] == "Pink Kirby"){
                gameData.HP[1] = gameData.HP[1] - gameData.roll; //roll subtracts from opponent's (Green Kirby's) HP
                document.querySelectorAll('.hp h2')[1].innerHTML = `${gameData.HP[1]}/25`; //HP bar for Green Kirby
                gameAlerts.innerHTML = `You've dealt ${gameData.roll} damage to ${gameData.players[1]}!`; 
                console.log(gameData.roll);
                console.log(gameData.HP[1])
            } else if (gameData.players[gameData.index] == "Green Kirby"){
                gameData.HP[0] = gameData.HP[0] - gameData.roll; //roll subtracts from opponent's (Pink Kirby's) HP
                document.querySelectorAll('.hp h2')[0].innerHTML = `${gameData.HP[0]}/25`; //HP bar for Pink Kirby
                gameAlerts.innerHTML = `You've dealt ${gameData.roll} damage to ${gameData.players[0]}!`;
                console.log(gameData.roll);
                console.log(gameData.HP[0]); 
            }
			};

            // HP continuously updates without resetting back to 25 
            let greenKirbyHP = gameData.HP[1];
            let pinkKirbyHP = gameData.HP[0]; 

			checkWinningCondition();
		}


	function checkWinningCondition() {
        // if Pink Kirby's HP reaches 0 first
		if (gameData.HP[1] <= 0) {
			gameAlerts.innerHTML = `${gameData.players[0]} 
			wins!`;
            document.querySelectorAll('header img')[1].style.filter = "grayscale(100%)"; 
            document.querySelectorAll('#arena img')[1].style.filter = "grayscale(100%)";


        // if Green Kirby's HP reaches 0 first
	    } else if(gameData.HP[0] <= 0){
			gameAlerts.innerHTML = `${gameData.players[1]} 
			wins!`;
            document.querySelectorAll('header img')[0].style.filter = "grayscale(100%)"; 
            document.querySelectorAll('#arena img')[0].style.filter = "grayscale(100%)";
        };

    }

}());