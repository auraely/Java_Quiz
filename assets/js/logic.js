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
  start.addEventListener("click", startQuiz);
}

function startQuiz(event) {
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

    // create buttons
    choicesOutput.insertAdjacentHTML(
      "beforeend",
      `
    <button data-correct=${isCorrect}>${choice}</button>           
    `
    );
  }
  questionWrap.classList.remove("hide"); // we can add or remove a class
}

function checkAnswer(event) {
  var item = event.target.getAttribute("data-correct");
  console.log(item);
  var message = document.createElement("div");
  document.body.append(message);
  if (item === "true") {
    message.innerText = "Correct";
    return;
    //next_question()  //in both cases
  } else {
    message.innerText = "Wrong";
    //we have to deduct few seconds from the timer
    // choicesOutput.inerHTML = " ";
    next_question(); // maybe put in iside if so it shows after message is displayed
  }
}
choicesOutput.addEventListener("click", checkAnswer);

//function showQuestion() {
//choicesOutput.inerHTML = " ";
//questionTitle.innerText=questions[currentQuestionIndex].Title

function next_question() {
  choices.addEventListener("click", function (event) {
    if (event.target) {
      currentQuestionIndex++;
      questionTitle.innerText = questions[currentQuestionIndex].Title;
    }
  });
}
//next_question()

//startQuiz()
