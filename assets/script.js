
var startButton = document.getElementById("start-quiz");

var QandA = [
    {
      q: "this is question 1?",
      ch: ["1A-answer", "1B-answer", "1C-answer", "1D-answer"],
      a: 0
      
    }, 
    {
      q: "this is question 2?",
      ch: ["2A-answer", "2B-answer", "2C-answer", "2D-answer"],
      a: 1
    },
    {
      q: "this is question 3?",
      ch: ["3A-answer", "3B-answer", "3C-answer", "3D-answer"],
      a: 2
    },
    {
      q: "this is question 4?",
      ch: ["4A-answer", "4B-answer", "4C-answer", "4D-answer"],
      a: 3
    }
  ];
console.log(QandA);

var i = 0;

let questionEl = document.getElementById("question");
  
let choiceEl = document.getElementById("choice-container");


//timer function
function countdown() {
    var timeDisplay = document.getElementById("timer");
    var time = 60;
    var timeleft = setInterval(counter, 1000);
    function counter() {
      if (time == 0) {
          console.log(time);
        clearInterval(timeleft);
      } else {
        time--;
        timeDisplay.innerHTML =  "Time: " + time;
      }
    }
};

function startQuiz() {
  debugger;
  
  //how do i access the h1 element in the div for questions?
  
  while (choiceEl.firstChild) {
  choiceEl.removeChild(choiceEl.firstChild);
  };
  
  let currentQuestion = QandA[i].q;
  questionEl.innerHTML = currentQuestion;
  console.log(currentQuestion);

  let currentChoices = QandA[i].ch;
  console.log(currentChoices);
  
  //let choice = currentChoices[i];
  //console.log(choice);

  currentChoices.forEach(function(choice, i ) {
    let chB = document.createElement("button");
    chB.textContent = i + 1 + "." + choice;
    choiceEl.appendChild(chB);
    if (QandA[i].a = currentChoices.indexOf(choice)) {
      chB.setAttribute("value", false);
      console.log(currentChoices.indexOf(choice));
    }
    else {
      chB.setAttribute("value", true);
    }
    console.log(chB);
    i + 1;
  });
  

};

/////////////////////////////////////////

// function submitChoice {
//   buttonClicked =
//   let userAnswer = buttonClicked
   
//   if (QandA[i].a = QandA[i].ch.indexOf(i))
// };
/////////////////////////////////////////

//startButton.addEventListener("click", countdown);
startButton.addEventListener("click", startQuiz);














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