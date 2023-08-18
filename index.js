const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');

let timerId;

startButton.addEventListener('click', function() {
    if (!timerId) { 
        timerId = setInterval(updateClock, 1000);
    }
});

stopButton.addEventListener('click', function() {
    clearInterval(timerId);
    timerId = null;
});

function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    const hours = now.getHours()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()
    clock.textContent = hours + ':' + minutes + ':' + seconds;
}