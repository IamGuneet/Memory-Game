
let gamePattern = [];
let userPattern = [];
let buttonColours = ["red", "blue", "green", "yellow"];
let level = 0;
let started = false;
// let patternsEqual = false;

function nextSequence() {
    level++;
    var randNum = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randNum];
    gamePattern.push(randomChosenColour);
    $('#' + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
    $('h1').text("Level:" + level);
}

//user button click pattern
$('button').click(function () {
    let userChosenColour = $(this).attr("id");
    userPattern.push(userChosenColour);
    var audioPlayer = new Audio("sounds/" + userChosenColour + ".mp3");
    audioPlayer.play();
    compareArray(userPattern.length - 1);
})
//compare arrays
function compareArray(curlevel) {
    if (userPattern[curlevel] === gamePattern[curlevel]) {
        $('h1').text("Sucess");
        if (userPattern.length === gamePattern.length) {
            userPattern = [];
            // $('h1').text("Sucess , moving to next level");//
            setTimeout(function(){nextSequence()}, 1000)
        }
    }
    else {
        // patternsEqual = false;
        $('h1').text("Game Over, press any key to restart");
        var wrong = new Audio("./sounds/wrong.mp3");
        wrong.play();
        started = false
        level =0;   
        gamePattern =[];
        userPattern=[];
        $('body').addClass("gameOver");
        setTimeout(  function (){
        $('body').removeClass("gameOver");  
        },200)
    
    }
}


$(document).keypress(function () {
    if (!started) {

        nextSequence()
        started = true;
    }
});














