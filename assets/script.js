
var startButton = document.getElementById("start-quiz");

var QandA = [
    {
      q: "what color is the sky?",
      ch: ["Blue", "brown", "yellow", "red"],
      a: "Blue"
      
    }, 
    {
      q: "what color is the grass?",
      ch: ["teal", "pink", "green", "orange"],
      a: "green"
    },
    {
      q: "what does the word 'var' do?",
      ch: ["wrong-answer", "declares a variable", "wrong-answer", "wrong-answer"],
      a: "declares a variable"
    },
    {
      q: "what does HTML stand for?",
      ch: ["hyper-text-markup-language", "wrong-answer", "wrong-answer", "wrong-answer"],
      a: "hyper-text-markup-language"
    }
  ];
console.log(QandA);

var time = QandA.length * 15;

let questionEl = document.getElementById("question");
  
let choiceEl = document.getElementById("choice-container");

var round = 0;

var timeDisplay = document.getElementById("timer");

// Get the existing data
var existingScores = JSON.parse(localStorage.getItem('high-score')) || [];
console.log(existingScores);

var viewScoresButton = document.getElementById("high-score-link");

//timer function
function countdown() {
    
    var timeleft = setInterval(counter, 1000);
    function counter() {
      if (time == 0 || round + 1 > QandA.length) {
          console.log(time);
        clearInterval(timeleft);
      } else {
        time--;
        timeDisplay.innerHTML =  "Time: " + time;
      }
    }
};

function startQuiz() {

  while (choiceEl.firstChild) {
    choiceEl.removeChild(choiceEl.firstChild);
  };

  let currentQuestion = QandA[round].q;
  let currentChoices = QandA[round].ch;
  let currentAnswer = QandA[round].a;

  questionEl.innerHTML = currentQuestion;

  currentChoices.forEach(function(choice, i ) {
    let chB = document.createElement("button");
    chB.textContent = i + 1 + "." + choice;
    if (currentAnswer === choice) {
      chB.setAttribute("value", true);
      chB.addEventListener("click", correctFun);
    } else {
      chB.setAttribute("value", false);
      chB.addEventListener("click", incorrectFun);
    }
    choiceEl.appendChild(chB);
  });
  round++;
  console.log("end round value", round);
};

function correctFun() {

  if (round + 1 <= QandA.length) {
    startQuiz();
  } else {
    quizOver();
  }
};

function incorrectFun() {
  
  time = time - 10;

  if (round + 1 <= QandA.length) {
    startQuiz();
  } else {
    quizOver();
  }
};

function quizOver() {
  timeDisplay.innerHTML =  "the quiz is over";

  while (choiceEl.firstChild) {
    choiceEl.removeChild(choiceEl.firstChild);
  };

  var userHighScoreForm = document.createElement("form");
  userHighScoreForm.id = "highScoreForm";
  
  var HighScoreInput = document.createElement("input");
  HighScoreInput.id = "initials-input";
  console.log(userHighScoreForm);

  var usersInitials = document.createElement("label");
  usersInitials.innerHTML = "Enter Your Initials";
  
  var initalPrompt = document.createElement("p");
  initalPrompt.innerHTML = "Your Score is " + time;

  var subScoreButt = document.createElement("button");
  subScoreButt.textContent = "submit";

  questionEl.innerHTML = "All done!";

  choiceEl.appendChild(initalPrompt);
  choiceEl.appendChild(userHighScoreForm);
  userHighScoreForm.appendChild(usersInitials);
  userHighScoreForm.appendChild(HighScoreInput);
  userHighScoreForm.appendChild(subScoreButt);
  
  
  subScoreButt.addEventListener("click", function(event) {
    event.preventDefault();
  });
  subScoreButt.addEventListener("click", storeHighScore);
};

function hideStartButt() {
startButton.className = "hide";
};

function storeHighScore() {
  console.log("user submited thier score!");

  var userInit = document.getElementById("initials-input").value;

  var score = {
    score: time ,
    name: userInit
  };

  existingScores.push(score);

  localStorage.setItem("high-score", JSON.stringify(existingScores));

  viewScores();
};

function viewScores() {

  hideStartButt();

  questionEl.innerHTML = "these are the high scores!";

  while (choiceEl.firstChild) {
    choiceEl.removeChild(choiceEl.firstChild);
  };

  var highScoreList = document.createElement("ul");
  console.log("this is the highscores list element", highScoreList);
  choiceEl.appendChild(highScoreList);

existingScores.forEach(function (score, i) {
  var scoreListItem = document.createElement("li");
  scoreListItem.innerHTML = i + 1 + ". " + score.name + "'s score is " + score.score ;
  highScoreList.appendChild(scoreListItem);
});
};

viewScoresButton.addEventListener("click", viewScores);
startButton.addEventListener("click", countdown);
startButton.addEventListener("click", hideStartButt);
startButton.addEventListener("click", startQuiz);