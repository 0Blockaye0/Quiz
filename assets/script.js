
var startButton = document.getElementById("start-quiz");

var QandA = {
    q1: ["A-answer", "B-answer", "C-answer", "D-answer"],
    q2: ["A-answer", "B-answer", "C-answer", "D-answer"],
    q3: ["A-answer", "B-answer", "C-answer", "D-answer"]
};

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

startButton.addEventListener("click", countdown);


