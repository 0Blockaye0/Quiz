
var startButton = document.getElementById("start-quiz");
console.log(startButton)

var time = 60;

var timeDisplay = document.getElementById("timer");

var QandA = {
    q1: ["A-answer", "B-answer", "C-answer", "D-answer"],
    q2: ["A-answer", "B-answer", "C-answer", "D-answer"],
    q3: ["A-answer", "B-answer", "C-answer", "D-answer"]
};

var correct

function countdown() {
    setInterval(function(){
        if (time <= 0) {
            clearInterval(time = 0)
            console.log("time has run out!")
        }
        console.log(time)
        timeDisplay.innerHTML = "Time: " + time
        time -= 1
    }, 1000)
};

startButton.addEventListener("click", countdown);