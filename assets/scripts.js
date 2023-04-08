var startQuiz = document.querySelector("#start");
var containerDisplay = document.querySelector(".container");
var cardTop = document.querySelector("#top");
var cardMid = document.querySelector("#mid");
var cardBot = document.querySelector("#bot");
var allButtons = document.querySelectorAll("#btn");

var arrOptions = ['round', "square", "UGLy"];
 
startQuiz.addEventListener("click", function(){

    cardBot.textContent = "";

    cardTop.textContent = "First Question: What is shape is the Earth?"
    cardMid.textContent = "";

for (var i = 0; i<arrOptions.length; i++){

    var li = document.createElement("li");
    var button = document.createElement("button");
    li.textContent = arrOptions[i];
    button.textContent = "select";

    cardMid.appendChild(li);
    li.appendChild(button);
    button.setAttribute("id","btn")
}

allButtons.addEventListener("click", function(event){
    var element = event.target;

    console.log(element.parentElement.textContent)
    console.log(event.target.parentElement.id);

    if(element.parentElement.textContent.include("round")){
        cardBot.textContent = "Correct!";
    }
    else{
        cardBot.textContent = "WRONG!";
    }
})


})






// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score