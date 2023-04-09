var startQuiz = document.querySelector("#start");
var containerDisplay = document.querySelector(".container");
var cardTop = document.querySelector("#top");
var cardMid = document.querySelector("#mid");
var cardBot = document.querySelector("#bot"); 
var timer = document.querySelector('#timer');
var secondsLeft = 80;
var listOptions = document.querySelector('#listOptions')
var index = 0;
var timerInterval


var arrOptions = ['round', "square", "UGLy"];
var arrGlobal = [{
    question: "9087430985723894057",
    option1:9,
    option2:7,
    option3:6,
    option4:5,
    ANSWER:5
},
{
    question: "lakjlkjdsf",
    option1:3,
    option2:4,
    option3:5,
    option4:6,
    ANSWER:3
}
];

 
startQuiz.addEventListener("click", function(){


    setTime();
    displayQuestion();



})








function btnsEventListner(event){
    var element = event.target;
 

    if(element.parentElement.textContent.includes(arrGlobal[index].ANSWER)){
        cardBot.textContent = "Correct!";
    }
    else{
        cardBot.textContent = "WRONG!";

    }

    index++;
    if(index<arrGlobal.length){
        setTimeout(displayQuestion, 500);

    }else{
        clearInterval(timerInterval);


    }


}


function setTime() { 

    timerInterval = setInterval(function() {
      secondsLeft--;
      timer.setAttribute("style", "font-size: 80px")
      timer.textContent = secondsLeft;
  
      if(secondsLeft === 0) { 
        clearInterval(timerInterval);  
      }
  
    }, 1000);
}

function displayQuestion(){
    
    cardBot.textContent = "";

    cardTop.textContent = arrGlobal[index].question;
    cardMid.textContent = "";

    listOptions.textContent = "";

for (var i = 1; i<5; i++){

    var li = document.createElement("li");
    var button = document.createElement("button");

    button.classList.add("btns")
    li.textContent = arrGlobal[index]["option" + i];
    button.textContent = "select";
 
    li.appendChild(button); 
    listOptions.appendChild(li);
    button.addEventListener("click", btnsEventListner);
    };

}


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