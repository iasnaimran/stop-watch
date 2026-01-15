let startBtn = document.getElementById('startBtn');
let stopBtn = document.getElementById('stopBtn');
let resetBtn = document.getElementById('resetBtn');

let hoursDisplay = document.getElementById('hours');
let minutesDisplay = document.getElementById('minutes');
let secondsDisplay = document.getElementById('seconds');
let millisecondsDisplay = document.getElementById('milliseconds');

let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval = null;


startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

function startTimer() {
    if (interval) {
        return; 
    }
    interval = setInterval(updateDisplay, 10); 
}

function stopTimer() {
    clearInterval(interval);
    interval = null;
}

function resetTimer() {
    stopTimer();
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateDisplay();
    millisecondsDisplay.textContent = "00"; 
}

function updateDisplay() {
    milliseconds++;
    if (milliseconds == 100) { 
        milliseconds = 0;
        seconds++;
    }
    if (seconds == 60) { 
        seconds = 0;
        minutes++;
    }
    if (minutes == 60) { 
        minutes = 0;
        hours++;
    }

  
    hoursDisplay.textContent = (hours < 10 ? "0" : "") + hours;
    minutesDisplay.textContent = (minutes < 10 ? "0" : "") + minutes;
    secondsDisplay.textContent = (seconds < 10 ? "0" : "") + seconds;
    millisecondsDisplay.textContent = (milliseconds < 10 ? "0" : "") + milliseconds;
}
