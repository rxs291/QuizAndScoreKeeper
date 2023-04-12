
///// my declared variables
var startQuiz = document.querySelector("#start");
var containerDisplay = document.querySelector(".container");
var cardTop = document.querySelector("#top");
var cardMid = document.querySelector("#mid");
var cardBot = document.querySelector("#bot"); 
var timer = document.querySelector('#timer');
var hidden = document.querySelector('#hidden');
var listOptions = document.querySelector('#listOptions')
var index = 0;
var timerInterval; 
var highscore = 0;
var secondsLeft = 80; 
var savedScores = [];
listOptions.style.backgroundColor = "grey";
listOptions.style.border = "solid black"
 


var arrGlobal = [{
    question: "How many players are on the play field in an NFL game?",
    option1:11,
    option2:18,
    option3:22,
    option4:26,
    ANSWER:22
},
{
    question: "Where are the Patriots from?",
    option1: "Dallas",
    option2: "Kanas City",
    option3: "Foxborough",
    option4: "New England",
    ANSWER:"Foxborough"
},
{
    question: "Who won the 1999 super bowl?",
    option1:"Chargers",
    option2: "Cowboys",
    option3: "Giants",
    option4: "Broncos",
    ANSWER:'Broncos'
},
{
    question: "When a team scores traditionally, it is called a...? ",
    option1: "Field Goal",
    option2: "Touchdown",
    option3: "Extra Point",
    option4: "Conversion",
    ANSWER:"Touchdown"
},
{
    question: "Rushing the passer with more than the usual number of defense players is called a...? ",
    option1: "Firefly",
    option2: "Option",
    option3: "Edgebreak",
    option4: "Blitzing",
    ANSWER:"Blitzing"
}
];

 
startQuiz.addEventListener("click", quizStart)


function quizStart() {


    setTime();
    displayQuestion();

}





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

    button.classList.add("btns");
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

    document.querySelector("#save").setAttribute("id", "saver")
    var save = document.querySelector("#saver");

    save.addEventListener('click', function(event){
        event.stopPropagation();
        var initials = "";
        var yourHighscore = '';

        console.log(yourHighscore);

        initials = document.querySelector('#initials').value;
        yourHighscore = {
            Initials: initials,
            highscore: highscore
        }   

        savedScores = JSON.parse(localStorage.getItem("savedHighScores")) || [];   
        savedScores.push(yourHighscore);   
        localStorage.setItem("savedHighScores", JSON.stringify(savedScores));    

        renderHighscores();

      });


}
 
function renderHighscores(){
    cardTop.textContent = '';
    cardMid.textContent = "";
    cardBot.textContent = "";
    listOptions.textContent= "";
    hidden.style.display = "none";

    cardTop.style.fontWeight = "900";
    cardTop.textContent = "HIGHSCORES";
    listOptions.style.listStyle = "decimal";


    savedScores = JSON.parse(localStorage.getItem("savedHighScores")) || [];
    savedScores.sort((a,b) => b.highscore - a.highscore);

    for (var i = 0; i<savedScores.length; i++){

        var li = document.createElement("li");
        li.textContent = savedScores[i].Initials + "    " + savedScores[i].highscore; 
        listOptions.appendChild(li); 

        };

        var buttonPlayAgain = document.createElement("button");
        buttonPlayAgain.textContent = "Play Again?";  
        buttonPlayAgain.addEventListener("click", restartQuiz);

        var clearHighScores = document.createElement("button");
        clearHighScores.textContent = "Clear Highscores";  
        clearHighScores.addEventListener("click", function () {
            localStorage.clear();
            renderHighscores()
        });

        cardBot.append(buttonPlayAgain);
        cardBot.append(clearHighScores);
;

};

function restartQuiz(){
    index = 0;
    secondsLeft = 80; 
    savedScores = []; 
    quizStart();
};
 

 