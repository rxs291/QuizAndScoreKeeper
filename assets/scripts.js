var startQuiz = document.querySelector("#start");
var containerDisplay = document.querySelector(".container");
var cardTop = document.querySelector("#top");
var cardMid = document.querySelector("#mid");
var cardBot = document.querySelector("#bot"); 
var timer = document.querySelector('#timer');
var hidden = document.querySelector('#hidden');
var save = document.querySelector("#save");
var secondsLeft = 80;
var listOptions = document.querySelector('#listOptions')
var index = 0;
var timerInterval; 
var highscore = 0;

 
var arrGlobal = [{
    question: "On a single team, how many players are on a volleyball court?",
    option1:9,
    option2:7,
    option3:6,
    option4:5,
    ANSWER:6
},
{
    question: "The answer is 3",
    option1:3,
    option2:4,
    option3:5,
    option4:6,
    ANSWER:3
},
{
    question: "The answer is 4",
    option1:3,
    option2:4,
    option3:5,
    option4:6,
    ANSWER:4
},
{
    question: "The answer is 5",
    option1:3,
    option2:4,
    option3:5,
    option4:6,
    ANSWER:5
},
{
    question: "The answer is 6",
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
        secondsLeft -= 15;

    }

    index++;
    if(index<arrGlobal.length){
        setTimeout(displayQuestion, 500);

    }else{
        highscore = secondsLeft;
        clearInterval(timerInterval);
        displayInputBox();

    }


}


function setTime() { 

    timerInterval = setInterval(function() {
      secondsLeft--;
      timer.setAttribute("style", "font-size: 80px")
      timer.textContent = secondsLeft;
  
      if(secondsLeft === 0) { 
        highscore = secondsLeft;
        clearInterval(timerInterval);  
        displayInputBox()
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

function displayInputBox(){
    cardTop.textContent = '';
    cardMid.textContent = "";
    cardBot.textContent = "";
    listOptions.textContent= "";

    cardTop.textContent = "Please Enter your Initials!";
    hidden.style.display = "block";

    save.addEventListener('click', function(){
        var initials = document.querySelector('#initials').value;
        var yourHighscore = {
            Initals: initials,
            highscore: highscore
        }  

        var savedScores = JSON.parse(localStorage.getItem("savedHighScores")) || []; 

        savedScores.push(yourHighscore); 

        localStorage.setItem("savedHighScores", JSON.stringify(savedScores));  

        console.log(localStorage.getItem("savedHighScores"));


      });


}
 
 


//!!!GIVEN I am taking a code quiz
//!!!! WHEN I click the start button
//!!!!THEN a timer starts and I am presented with a question
//!!!! WHEN I answer a question
//!!! THEN I am presented with another question
//!!!! WHEN I answer a question incorrectly
//!!!! THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score