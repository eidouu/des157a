( function(){

    "use strict"; 
    console.log('reading.js'); 

    alert("Hello! I've chosen to redo my portal page where the banner cycles through the four seasons endlessly. There isn't much interaction and the code isn't quite there yet (it's currently stuck on only spring and fall) so feel free to just observe the graphics for a few seconds!");

    let banners = 
    ["images/portal_page_banner_v2.svg",
     "images/portal_page_banner_v2_summer.svg",
     "images/portal_page_banner_v2_fall.svg",
     "images/portal_page_banner_v2_winter.svg"
    ]

    let fallingObjects = 
    ["images/petal_1.svg",
    "images/peach.svg",
    "images/fallLeaf.svg",
    "images/snowflake.svg"
    ];

    // targets the banner image
    const banner = document.querySelector('#bannerGraphic img');

    // targets all falling object images
    const falling = document.querySelectorAll('.petals img');

    //switches banner
    function bannerChange() {
        for (let i = 0; i < banners.length - 1; i++){
            banner.src = `${banners[i]}`; //banner should stay on screen for 2 seconds before it switches out 
            falling.src = `${fallingObjects[i]}`; //falling objects change with the banner as well 
            if (i > banners.length){ //if index goes past winter then it resets back to spring
                i = 1; 
            }
            console.log(banner.src);
            console.log(falling.src); 
        }
    };
        
    //banner should change every 2 seconds
    setInterval(bannerChange, 2000); 


})(); 