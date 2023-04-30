// Timer
const timerDisplay = document.getElementById('timer-display');
const timerDurationInput = document.getElementById('timer-duration');
const startTimerBtn = document.getElementById('start-timer');
const stopTimerBtn = document.getElementById('stop-timer');
const resetTimerBtn = document.getElementById('reset-timer');
let timerInterval;
let timerDuration;

startTimerBtn.addEventListener('click', () => {
  if (!timerInterval && timerDurationInput.value > 0) {
    timerDuration = timerDurationInput.value;
    startTimer();
  }
});

stopTimerBtn.addEventListener('click', stopTimer);

resetTimerBtn.addEventListener('click', resetTimer);

function startTimer() {
  const startTime = Date.now();
  const endTime = startTime + timerDuration * 1000;

  timerInterval = setInterval(() => {
    const remainingTime = endTime - Date.now();
    if (remainingTime < 0) {
      stopTimer();
      return;
    }

    const remainingSeconds = Math.floor(remainingTime / 1000);
    const minutes = Math.floor(remainingSeconds / 60).toString().padStart(2, '0');
    const seconds = (remainingSeconds % 60).toString().padStart(2, '0');

    timerDisplay.textContent = `${minutes}:${seconds}`;
  }, 10);
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  timerDurationInput.value = '';
  timerDisplay.textContent = '00:00:00';
}

// Stopwatch
const stopwatchDisplay = document.getElementById('stopwatch-display');
const startStopwatchBtn = document.getElementById('start-stopwatch');
const stopStopwatchBtn = document.getElementById('stop-stopwatch');
const resetStopwatchBtn = document.getElementById('reset-stopwatch');
let stopwatchInterval;
let stopwatchTime = 0;

startStopwatchBtn.addEventListener('click', () => {
  if (!stopwatchInterval) {
    startStopwatch();
  }
});

stopStopwatchBtn.addEventListener('click', stopStopwatch);

resetStopwatchBtn.addEventListener('click', resetStopwatch);

function startStopwatch() {
  const startTime = Date.now() - stopwatchTime;

  stopwatchInterval = setInterval(() => {
    stopwatchTime = Date.now() - startTime;

    const minutes = Math.floor(stopwatchTime / 60000).toString().padStart(2, '0');
    const seconds = Math.floor((stopwatchTime % 60000) / 1000).toString().padStart(2, '0');
    const milliseconds = Math.floor((stopwatchTime % 1000) / 10).toString().padStart(2, '0');

    stopwatchDisplay.textContent = `${minutes}:${seconds}:${milliseconds}`;
  }, 10);
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchInterval = null;
}

function resetStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchInterval = null;
  stopwatchTime = 0;
  stopwatchDisplay.textContent = '00:00:00';
}