( function(){
    "use strict"; 
    console.log("reading.js"); 

    //name of game, can target all h3 instead of first one
    const gameTitle = document.querySelectorAll('main div h3');

    //selects game thumbnails
    const div = document.querySelectorAll('main div div img');

    //hovering over game icon will show game title above
    div.forEach(function(eachImage){
        eachImage.addEventListener('mouseover', hoverImage);
        eachImage.addEventListener('mouseout', hoverOutImage); 
        // eachImage.addEventListener('click', openOverlay);
    }); 

    //hover over a game photo to show the title of the game, thank you example5script.js for the good example o7
    function hoverImage(event){
        const gameIcon = event.target.id;
        console.log(gameIcon);
        switch (gameIcon) {
            case 'game1': gameTitle[0].className = 'visible'; break; 
            case 'game2': gameTitle[1].className = 'visible'; break;
            case 'game3': gameTitle[2].className = 'visible'; break; 
            case 'game4': gameTitle[3].className = 'visible'; break; 
            case 'game5': gameTitle[4].className = 'visible'; break; 
        }
    }

    //same thing as function hoverImage but for hovering out, makes titles disappear
    function hoverOutImage(event){
        const gameIcon2 = event.target.id;
        switch (gameIcon2) {
            case 'game1': gameTitle[0].className = 'hidden'; break; 
            case 'game2': gameTitle[1].className = 'hidden'; break;
            case 'game3': gameTitle[2].className = 'hidden'; break; 
            case 'game4': gameTitle[3].className = 'hidden'; break; 
            case 'game5': gameTitle[4].className = 'hidden'; break;           
        }
    }

    //opening overlays
    // function openOverlay(event){
    //     event.preventDefault(); 

    //     const showOverlay = document.querySelector('#overlay')

    //     showOverlay.className = "visible";

    //     const imgSource = document.querySelector('#overlayPic'); 

    //     if (div.id.onclick = "game1"){
    //         imgSource.src = "images/pokemon_violet.jpg"; 
    //     } else if (div.id.onclick = "game2"){
    //         imgSource.src = "images/animal_crossing.jpg";
    //     }

    //     console.log(div.id.onClick);
    //     console.log(gameTitle[4].className);
    // }

    //changes source
    const imgSource = document.querySelector("#overlayPic"); 

    //opens overlay
    const showOverlay = document.querySelector("#overlay");

    //opens first game
    div[0].addEventListener('click', function(){
        showOverlay.className = "visible";
        imgSource.src = "images/pokemon_violet.jpg"; 
        document.querySelector('#overlay p').innerHTML = "I picked up this game back in last November! I came in with low expectations with how Sword and Shield came out, but I was fortunately proven wrong with how fun the open-world aspect and character-driven stories were. The graphics and bugs were noticeable, but overall I haven't had this much fun with a Pokemon game since Heartgold and Soulsilver. Here is a screenshot of a frequent bug where Raichu spawns inside of a wall. "
        }
    );

    //opens second game
    div[1].addEventListener('click', function(){
        showOverlay.className = "visible";
        imgSource.src = "images/animal_crossing.jpg"; 
        document.querySelector('#overlay p').innerHTML = "Back when the pandemic first started where we were all trapped inside our homes, the first thought that comes to mind when I think of those times is Animal Crossing: New Horizons. I really enjoyed customizating, organizing, and decorating my entire island (I'm still not done after three years lol)! I usually play a lot of RPGs, so playing a game with a more relaxed genre was a nice change in pace. The screenshot depicts me finally catching one of the rarest fish in the game."
        }
    );

    //opens third game
    div[2].addEventListener('click', function(){
        showOverlay.className = "visible";
        imgSource.src = "images/breath_of_the_wild.jpg"; 
        document.querySelector('#overlay p').innerHTML = "Breath of the Wild was my second ever Nintendo Switch in 2018, and it's still a very solid game that I enjoy sometimes even today. The depth of the open-world gameplay as well as combat was an engaging concept that continued to evolve as I continued to play. Here is a screenshot of me trying to solve a puzzle which I looked up the answers for online."
        }
    );

    //opens fourth game
    div[3].addEventListener('click', function(){
        showOverlay.className = "visible";
        imgSource.src = "images/legends_arceus.jpg"; 
        document.querySelector('#overlay p').innerHTML = "I borrowed my roommate's copy of Pokemon Legends Arceus back in early 2022, but if we were to ever be seperated I would buy the game without hesitation. Unlike mainline games, this game mainly focuses on catching Pokemon by aiming and throwing PokeBalls at wild Pokemon in real time instead of just being in turn-based combat. I really hope GameFreak makes another Legends game because I think this is the right direction the Pokemon video game series should be going. The screenshot shows a character's VSCO girl moment."
        }
    );

    //opens fifth game
    div[4].addEventListener('click', function(){
        showOverlay.className = "visible";
        imgSource.src = "images/pokemon_sp.jpg"; 
        document.querySelector('#overlay p').innerHTML = "Pokemon Pearl was my first ever video I've ever heard played, so when the modern remake came out in November 2021 I bought it without hesitation. It was really nice exploring all of the areas I've went through as a kid, but as a remake I wished there was more original content added instead of being an extremely faithful remake. The screenshot shows me taking a break from riding the bike up and down for 30 minutes as I shiny huny for a Shinx."
        }
    );

    //close overlay
    document.querySelector('.close').addEventListener('click', closeOverlay)

    function closeOverlay(){
        showOverlay.className = "hidden"; 
        imgSource.src = "";
    }
})(); 