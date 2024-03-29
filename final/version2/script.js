( function(){

    "use strict"; 
    console.log('reading.js'); 

    alert("Hello! I've chosen to redo my portal page where the banner cycles through the four seasons endlessly. There isn't much interaction and the code isn't quite there yet (it's currently stuck on only spring and fall) so feel free to just observe the graphics for a few seconds!");

    let banners = 
    ["images/portal_page_banner_v2.svg",
     "images/portal_page_banner_v2_summer.svg",
     "images/portal_page_banner_v2_fall.svg",
     "images/portal_page_banner_winter.svg"
    ]

    let fallingObjects = 
    ["images/petal_1.svg",
    "images/peach.svg",
    "images/fallLeaf.svg",
    "images/snowflake.svg"
    ];

    // targets the banner image
    const bannerTarget = document.querySelector('#bannerGraphic img');

    // targets all falling object images
    const falling = document.querySelector('.petal1');
    const falling2 = document.querySelector('.petal2');
    const falling3 = document.querySelector('.petal3');
    const falling4 = document.querySelector('.petal4');
    const falling5 = document.querySelector('.petal5');
    const falling6 = document.querySelector('.petal6');
    const falling7 = document.querySelector('.petal7');
    const falling8 = document.querySelector('.petal8');
    const falling9 = document.querySelector('.petal9');
    const falling10 = document.querySelector('.petal10');
    const falling11 = document.querySelector('.petal11');
    const falling12 = document.querySelector('.petal12');

    // test
    // function bannerChange(){
    //         setTimeout(switchBanner, 2000); 
    // };

    // function switchBanner(){
    //     for (let i = 0; i < banners.length; i++){ 
    //         // changes all falling objects individually, couldn't figure out how to do it under one line 
    //         // how to make loop wait at each increment? 
    //         bannerTarget.src = `${banners[i]}`;
    //         falling.src = `${fallingObjects[i]}`;
    //         falling2.src = `${fallingObjects[i]}`;
    //         falling3.src = `${fallingObjects[i]}`;
    //         falling4.src = `${fallingObjects[i]}`;
    //         falling5.src = `${fallingObjects[i]}`;
    //         falling6.src = `${fallingObjects[i]}`;
    //         falling7.src = `${fallingObjects[i]}`;
    //         falling8.src = `${fallingObjects[i]}`;
    //         falling9.src = `${fallingObjects[i]}`;
    //         falling10.src = `${fallingObjects[i]}`;
    //         falling11.src = `${fallingObjects[i]}`;
    //         falling12.src = `${fallingObjects[i]}`;

    //         console.log(i); 
    //     };

    //     console.log(bannerTarget.src);
    //     console.log(falling.src); 
    // };

    //switches banner
    function bannerChange() {
        for (let i = 0; i < banners.length - 1; i++){
            bannerTarget.src = `${banners[i]}`; //banner should stay on screen for 2 seconds before it switches out 
            falling.src = `${fallingObjects[i]}`; //falling objects change with the banner as well 
            falling2.src = `${fallingObjects[i]}`;
            falling3.src = `${fallingObjects[i]}`;
            falling4.src = `${fallingObjects[i]}`;
            falling5.src = `${fallingObjects[i]}`;
            falling6.src = `${fallingObjects[i]}`;
            falling7.src = `${fallingObjects[i]}`;
            falling8.src = `${fallingObjects[i]}`;
            falling9.src = `${fallingObjects[i]}`;
            falling10.src = `${fallingObjects[i]}`;
            falling11.src = `${fallingObjects[i]}`;
            falling12.src = `${fallingObjects[i]}`;
            if (i > banners.length){ //if index goes past winter then it resets back to spring
                i = 1; 
            }
            console.log(bannerTarget.src);
            console.log(falling.src); 
        }
    };
        
    //banner should change every 2 seconds
    setInterval(bannerChange, 2000); 



})(); 