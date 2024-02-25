function toggleMenu() {
    var menuSidebar = document.getElementById("menuSidebar");
    menuSidebar.classList.toggle("show");
}

const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;

const COLOR_CODES = {
    info: {
        color: "green"
    },
    warning: {
        color: "orange",
        threshold: WARNING_THRESHOLD
    },
    alert: {
        color: "red",
        threshold: ALERT_THRESHOLD
    }
};

const TIME_LIMIT = 20;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;

function onTimesUp() {
    clearInterval(timerInterval);
}

function startTimer() {
    if (timerInterval === null && timeLeft > 0) { // Check if timer is not already running and timeLeft is greater than 0
        timerInterval = setInterval(() => {
            timePassed++;
            timeLeft = TIME_LIMIT - timePassed;
            if (timeLeft <= 0) { // Check if timeLeft is less than or equal to 0
                timeLeft = 0; // Set timeLeft to 0 to prevent negative values
                onTimesUp();
            }
            document.getElementById("base-timer-label").innerHTML = formatTime(timeLeft);
            setCircleDasharray();
            setRemainingPathColor(timeLeft);
        }, 1000);
    }
}

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    return `${minutes}:${seconds}`;
}

function setRemainingPathColor(timeLeft) {
    const { alert, warning, info } = COLOR_CODES;
    const remainingPath = document.getElementById("base-timer-path-remaining");

    // Remove all color classes
    remainingPath.classList.remove(info.color);
    remainingPath.classList.remove(warning.color);
    remainingPath.classList.remove(alert.color);

    // Add the appropriate color class based on the current time left
    if (timeLeft <= alert.threshold) {
        remainingPath.classList.add(alert.color);
    } else if (timeLeft <= warning.threshold) {
        remainingPath.classList.add(warning.color);
    } else {
        remainingPath.classList.add(info.color);
    }
}

function calculateTimeFraction() {
    const rawTimeFraction = timeLeft / TIME_LIMIT;
    return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
    const circleDasharray = `${(
        calculateTimeFraction() * FULL_DASH_ARRAY
    ).toFixed(0)} 283`;
    document
        .getElementById("base-timer-path-remaining")
        .setAttribute("stroke-dasharray", circleDasharray);
}
function resetTimer() {
    clearInterval(timerInterval); // Clear the interval to stop the timer
    timePassed = 0; // Reset the time passed
    timeLeft = TIME_LIMIT; // Reset the time left
    document.getElementById("base-timer-label").innerHTML = formatTime(timeLeft); // Update the timer display
    setCircleDasharray(); // Reset the circle dash array
    setRemainingPathColor(timeLeft); // Reset the remaining path color
    timerInterval = null; // Reset timer interval to allow starting again
}
