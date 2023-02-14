( function(){
    "use strict";
    console.log("reading.js");

    const madlib = document.querySelector('#results'); 

    const result = document.querySelector("#myform");

    let completedMadLib; 

    result.addEventListener('submit', function(event){
        event.preventDefault(); //prevents blank entries
        const mood = document.querySelector('#mood').value;
        const talent = document.querySelector('#talent').value; 
        const num = document.querySelector('#num').value; 
        const adj1 = document.querySelector('#adj1').value; 
        const adj2 = document.querySelector('#adj2').value; 

        if (mood != "great!" && mood != "chill" && mood != "meh"){
            alert('wheres the mood'); 
            document.querySelector('#mood').focus(); 
        } else if (num == false){
            document.querySelector('#num').focus(); 
        } else if (talent ==false){
            document.querySelector('#talent').focus(); 
        } else if (adj1 == false){
            document.querySelector('#adj1').focus(); 
        } else if (adj2 == false){
            document.querySelector('adj2').focus(); 
        } else {
            document.querySelector("#websiteTitle").className = 'hidden'; 
            document.querySelector('#defaultCard').className = 'hidden'; 
            document.getElementById('websiteTitle').style.display = "none";
            document.querySelector('#defaultCard').style.display = 'none'; 
            document.querySelector('#results').className = 'visible'; 
        }

        //change background image source based on the mood
        if (mood == 'great!'){
            document.getElementById('resultsCard').style.backgroundImage = "url(images/cat_good.svg)";
            document.getElementById('websiteTitle').style.display = "none";
        } else if (mood == 'meh'){
            document.getElementById('resultsCard').style.backgroundImage = "url(images/cat_sad.svg"; 
        }
        document.querySelector("#talentResults").innerHTML = `TALENT: ${talent}`;
        document.querySelector("#madlibResults").innerHTML = `When I was ${num} years old, I accomplished this ${adj1} talent! Ain't that ${adj2}?`
        
    });

    //refresh page button after madlib completion 
    const refreshPage = document.querySelector('#refreshDraw');

    refreshPage.addEventListener('click', function(){
        location.reload(); 
    })


}());