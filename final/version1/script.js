( function(){

    "use strict"; 
    console.log('reading.js'); 

    let banners = 
    ["images/portal_page_banner_v2.svg",
     "images/portal_page_banner_v2_summer.svg",
     "images/portal_page_banner_v2_fall.svg",
     "images/portal_page_banner_v2_winter.svg"
    ];

    let fallingObjects = 
    ["images/petal_1.svg",
    "images/peach.svg",
    "images/fallLeaf.svg",
    "images/snowflake.svg"
    ];

    const banner = document.querySelector('#bannerGraphic img');

    const falling = document.querySelectorAll('.petals');

    //switches banner
    function bannerChange() {
        for (let i = 0; i < banners.length - 1; i++){
            banner.src = `${banners[i]}`; //banner should stay on screen for 2 seconds before it switches out 
            falling.src = `${fallingObjects[i]}`; //falling objects change with the banner as well 
            if (i > banners.length){ //if index goes past winter then it resets back to spring
                i = 1; 
            }
            console.log(falling.src); 
        }
    };
        
    //banner should change every 2 seconds
    setInterval(bannerChange, 2000); 


})(); 