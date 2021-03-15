
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
var existingScores = localStorage.getItem('high-score');

// If no existing data, create an array
// Otherwise, convert the localStorage string to an array
existingScores = existingScores ? JSON.parse(existingScores) : {};
console.log(existingScores);

var highScoreArr = [];



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
  //debugger;
  while (choiceEl.firstChild) {
    choiceEl.removeChild(choiceEl.firstChild);
  };

  let currentQuestion = QandA[round].q;
  let currentChoices = QandA[round].ch;
  let currentAnswer = QandA[round].a;
  console.log("current a outside for each loop", currentAnswer);

  questionEl.innerHTML = currentQuestion;

  currentChoices.forEach(function(choice, i ) {
    let chB = document.createElement("button");
    chB.textContent = i + 1 + "." + choice;
    console.log("a", currentAnswer);
     console.log("coice", choice);
    // console.log(QandA[i].a);
    if (currentAnswer === choice) {
      chB.setAttribute("value", true);
      chB.addEventListener("click", correctFun);
      console.log("if", chB);
    } else {
      chB.setAttribute("value", false);
      chB.addEventListener("click", incorrectFun);
      console.log("else", chB);
    }
    choiceEl.appendChild(chB);
    //i++;
  });
  round++;
  //x++;
  console.log("end round value", round);
};

function correctFun() {
  //debugger;
  //logic for correct prompt fade
  //goes here

  //assign points??
  if (round + 1 <= QandA.length) {
    startQuiz();
  } else {
    quizOver();
  }
};

function incorrectFun() {
  //debugger;
  //logic for incorrect prompt
  //fade goes here

  //deduct points??
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
  // if (startButton.style.display === "none") {
  //   startButton.style.display = "block";
  // } else {
  //   startButton.style.display = "none";
  // }
};

function storeHighScore() {
  console.log("user submited thier score!");

  var userInit = document.getElementById("initials-input").value;

  var score = {
    score: time ,
    name: userInit
  };

  highScoreArr.push(score);

    // Add new data to localStorage Array
  // existingScores["high-score"] = ;

  // // Save back to localStorage
  // localStorage.setItem('myLunch', JSON.stringify(existingScores));
  
  

  // existingScores.push(highScore);

  localStorage.setItem("high-score", JSON.stringify(existingScores));
  console.log(existingScores);


  // console.log(highScores);
  // console.log(score);
};


startButton.addEventListener("click", countdown);
startButton.addEventListener("click", hideStartButt);
startButton.addEventListener("click", startQuiz);


