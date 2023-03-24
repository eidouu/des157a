( function(){

    "use strict"; 
    console.log('reading.js'); 

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
    const falling = document.querySelectorAll('.petals img');

    // change background color
    const background = document.querySelector('body');

    var rect = bannerTarget.getBoundingClientRect();
    console.log(rect.left, rect.top); 

    //banner's absolute position is 208 top, 135.1953125 left

    //recursive hell 
    function sourceSwap (){
        setTimeout( function(){
            falling.forEach( function (eachItem){
                eachItem.src = "images/peach.svg"; 
            });
            bannerTarget.src = "images/portal_page_banner_v2_summer.svg"
            background.style.backgroundColor = "#ECFCFF";
            setTimeout( function(){
                falling.forEach( function (eachItem){
                    eachItem.src = "images/fallLeaf.svg"; 
                });
                bannerTarget.src = "images/portal_page_banner_v2_fall.svg"
                background.style.backgroundColor = "#FFF5EC";
                setTimeout( function(){
                    falling.forEach( function (eachItem){
                        eachItem.src = "images/snowflake.svg"; 
                    });
                    bannerTarget.src = "images/portal_page_banner_winter.svg"
                    background.style.backgroundColor = "#F2ECFF";
                    setTimeout( function(){
                        falling.forEach( function (eachItem){
                            eachItem.src = "images/petal_1.svg"; 
                        });
                        bannerTarget.src = "images/portal_page_banner_v2.svg"
                        background.style.backgroundColor = "#E5F4E3"; 
                        setTimeout( function(){
                            sourceSwap(); 
                        }, 5000);
                    }, 5000);
                    
                }, 5000)
            }, 5000);
        }, 5000)
    };

    //have all banners be in the html at the same, but set the 3 banners that aren't showing to a class with 0 opacity, the current photo should have class with z-index 

    sourceSwap(); 
    // const falling2 = document.querySelector('.petal2');
    // const falling3 = document.querySelector('.petal3');
    // const falling4 = document.querySelector('.petal4');
    // const falling5 = document.querySelector('.petal5');
    // const falling6 = document.querySelector('.petal6');
    // const falling7 = document.querySelector('.petal7');
    // const falling8 = document.querySelector('.petal8');
    // const falling9 = document.querySelector('.petal9');
    // const falling10 = document.querySelector('.petal10');
    // const falling11 = document.querySelector('.petal11');
    // const falling12 = document.querySelector('.petal12');

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
    // function bannerChange() {
    //     for (let i = 0; i < banners.length - 1; i++){
    //         bannerTarget.src = `${banners[i]}`; //banner should stay on screen for 2 seconds before it switches out 
    //         falling.src = `${fallingObjects[i]}`; //falling objects change with the banner as well 
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
    //         if (i > banners.length){ //if index goes past winter then it resets back to spring
    //             i = 1; 
    //         }
    //         console.log(bannerTarget.src);
    //         console.log(falling.src); 
    //     }
    // };
        
    // //banner should change every 2 seconds
    // setTimeout(bannerChange, 2000); 



})(); 