/*questions
//the next question comes if we hit one of the answers 
answers 
// it should say correct/wrong in the feedback class('hide')- an element can be hidden or not
// it dissapears after 1 sec : setTimeOut only does it once and SetInterval
if (correct_answer)   highscore++

timer*/

var currentQuestionIndex = 0;
var timeLeft = 0;
//when we start the quiz we need to show the question wrapper
var questionWrap = document.querySelector("#questions");
var questionTitle = document.querySelector("#question-title");
var choicesOutput = document.querySelector("#choices");
var feedback = document.querySelector("#feedback");
var start = document.querySelector("#start");
var startScreen = document.querySelector("#start-screen");
var timerWrap = document.querySelector(".timer");
var time = document.querySelector("#time");
var highScores = document.querySelector(".scores");
var endScreen = document.querySelector("#end-screen");

// Start the quiz
if (start) {
  start.addEventListener("click", Quiz);
}

function Quiz(event) {
  startScreen.classList.add("hide");
  event.preventDefault();
  Countdown();
  nextQuestion();
}

function nextQuestion(event) {
  var currentQuestion = questions[currentQuestionIndex];
  choicesOutput.innerHtml = "";
  questionTitle.innerHtml = "";

  var choices = currentQuestion.choices;
  //remember to put choicesOutput.innerHTML=""  to clear it when u need
  if (choices) {
    questionTitle.innerText = currentQuestion.title;
  }

  for (var i = 0; i < choices.length; i++) {
    var choice = choices[i];
    var isCorrect = currentQuestion.answer === choice; // the boolean is true if the answer matches oue choice

    // create buttons with adjacent
    choicesOutput.insertAdjacentHTML(
      "beforeend",
      `
    <button data-correct=${isCorrect}>${choice}</button>           
    `
    );
  }
  questionWrap.classList.remove("hide"); // we can add or remove a class
}

// checking if the answer is correct
function checkAnswer(event) {
  var correctAnswer = event.target.getAttribute("data-correct");
  var feedback = document.querySelector("#feedback");
  feedback.classList.remove("hide");
  var correct = new Audio("assets/sfx/correct.wav");
  var incorrect = new Audio("assets/sfx/incorrect.wav");

  // var message = document.createElement("div");
  //document.body.append(message);
  if (correctAnswer === "true") {
    feedback.innerText = "Correct";
    correct.play();
    currentQuestionIndex++;
    next_question(); //in both cases
  } else {
    feedback.innerText = "Wrong";
    incorrect.play();
    timeleft -= 10;
    //we have to deduct few seconds from the timer
    // choicesOutput.inerHTML = " ";
    next_question(); // maybe put in iside if so it shows after message is displayed
  }
}

// Prints final score to page
function FinalScore() {
  finalScore.innerText = timeLeft;
}

//function for the timer
function Countdown() {
  timeLeft = 100;

  var timeInerval = setInterval(function () {
    time.innerText = timeLeft;
    timeLeft--;
    if (timeLeft < 0) {
      clearTimeout(timeInerval);
      endScreen.classList.remove("hide");
      questionsWrap.classList.add("hide");
      FinalScore();
    }
  }, 100);
}
