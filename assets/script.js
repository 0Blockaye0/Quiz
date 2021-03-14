
var startButton = document.getElementById("start-quiz");

var points = 0;

var i = 0;

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

var score = time + points;

let questionEl = document.getElementById("question");
  
let choiceEl = document.getElementById("choice-container");

//timer function
function countdown() {
    var timeDisplay = document.getElementById("timer");
    var timeleft = setInterval(counter, 1000);
    function counter() {
      if (time == 0 || i + 1 > QandA.length) {
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

  let currentQuestion = QandA[i].q;
  let currentChoices = QandA[i].ch;

  questionEl.innerHTML = currentQuestion;

  currentChoices.forEach(function(choice, i ) {
    let chB = document.createElement("button");
    chB.textContent = i + 1 + "." + choice;
    //************************//
    // console.log(QandA[i]);
    // console.log(choice);
    // console.log(QandA[i].a);
    if (QandA[i].a === choice) {
      chB.setAttribute("value", true);
      chB.addEventListener("click", correctFun);
      console.log(chB);
    } else {
      chB.setAttribute("value", false);
      chB.addEventListener("click", incorrectFun);
      console.log(chB);
    }
    choiceEl.appendChild(chB);
    i++;
  });
  i++;
  console.log(i);
};

function correctFun() {
  //debugger;
  //logic for correct prompt fade
  //goes here

  //assign points??
  points = points + 10;
  if (i + 1 <= QandA.length) {
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

  if (i + 1 <= QandA.length) {
    startQuiz();
  } else {
    quizOver();
  }
};

function quizOver() {
  
  console.log(score);
  console.log(time);
  console.log(points);
  clearInterval(timeleft);
};


/////////////////////////////////////////

// function submitChoice {
//   buttonClicked =
//   let userAnswer = buttonClicked
   
//   if (QandA[i].a = QandA[i].ch.indexOf(i))
// };
/////////////////////////////////////////

startButton.addEventListener("click", countdown);
startButton.addEventListener("click", startQuiz);

// correctAnswerButton.addEventListener("click", correctFun);

// incorrectAnswerButton.addEventListener("click", incorrectFun);







// function quizLayout()  {
//   let questionPlacement = document.getElementsByTagName("h1");
//   let choicePlacement = document.getElementsByClassName("choice-content");

//   //questionPlacement.innerHTML(QandA[x].q)

//   for (var i = 0; i < QandA.length; i ++) {
//     let choice1 = document.createElement("button").innerHTML(QandA[i].ch[i]);
//     let choice2 = document.createElement("button").innerHTML(QandA[i].ch[i=+1]);
//     let choice3 = document.createElement("button").innerHTML(QandA[i].ch[i=+2]);
//     let choice4 = document.createElement("button").innerHTML(QandA[i].ch[i=+3]); 
//     let choicesArr = [choice1, choice2, choice3, choice4];
    
//     choicePlacement.appendChild(choicesArr[i]);
//   }

  
    


//     console.log(questionPlacement);
//     console.log(choicePlacement);
//     console.log(choice1);
//     console.log(choice2);
//     console.log(choice3);
//     console.log(choice4);
 

    




//     //question.innerHTML = QandA.q1

    
    
// };

// quizLayout();