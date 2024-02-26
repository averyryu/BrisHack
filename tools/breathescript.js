// const PHASES = [
//     { phase: 'Inhale', duration: 4, color: '#7BB7E0' },
//     { phase: 'Hold', duration: 7, color: '#DE0F3F' },
//     { phase: 'Exhale', duration: 8, color: '#6AC66B' }
// ];
//
// const FULL_DASH_ARRAY = 283;
// let currentPhaseIndex = 0;
// let timeLeft = PHASES[currentPhaseIndex].duration;
// let timerInterval = null;
//
// // Update timer display with initial time left
// updateTimerDisplay();
//
// function startTimer() {
//     timerInterval = setInterval(() => {
//         if (timeLeft > 0) {
//             timeLeft--;
//             updateTimerDisplay();
//         } else {
//             if (currentPhaseIndex < PHASES.length - 1) {
//                 currentPhaseIndex++;
//             } else {
//                 currentPhaseIndex = 0;
//             }
//             timeLeft = PHASES[currentPhaseIndex].duration;
//             updateTimerDisplay();
//         }
//     }, 1000);
// }
//
// // function updateTimerDisplay() {
// //     const phase = PHASES[currentPhaseIndex];
// //     const minutes = Math.floor(timeLeft / 60);
// //     const seconds = timeLeft % 60;
// //     document.getElementById("base-timer-label").textContent = `${phase.phase} ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
// //     setCircleDasharray(phase.duration);
// //     setRemainingPathColor(phase.color);
// // }
// function updateTimerDisplay() {
//     const phase = PHASES[currentPhaseIndex];
//     const minutes = Math.floor(timeLeft / 60);
//     const seconds = timeLeft % 60;
//     document.getElementById("base-timer-label").textContent = `${phase.phase}`;
//     setCircleDasharray(phase.duration);
//     setRemainingPathColor(phase.color);
//     const baseTimer = document.querySelector('.base-timer');
//     if (timerInterval) {
//         baseTimer.classList.add('running');
//     } else {
//         baseTimer.classList.remove('running');
//     }
//     const rotationAngle = (360 / TIME_LIMIT) * (TIME_LIMIT - timeLeft);
//
//     // Apply rotation angle to the pointer element
//     const pointer = document.getElementById('pointer');
//     pointer.style.transform = `rotate(${rotationAngle}deg) translateY(-45px)`;
// }
//
// function setRemainingPathColor(color) {
//     const remainingPath = document.getElementById("base-timer-path-remaining");
//     remainingPath.style.stroke = color;
// }
//
// function calculateTimeFraction(duration) {
//     return duration / PHASES[currentPhaseIndex].duration;
// }
//
// function setCircleDasharray(duration) {
//     const circleDasharray = `${(calculateTimeFraction(duration) * FULL_DASH_ARRAY).toFixed(0)} 283`;
//     document.getElementById("base-timer-path-remaining").setAttribute("stroke-dasharray", circleDasharray);
// }
//
// document.addEventListener('DOMContentLoaded', startTimer);
const PHASES = [
    { phase: 'Inhale', duration: 4, color: '#7BB7E0' },
    { phase: 'Hold', duration: 7, color: '#DE0F3F' },
    { phase: 'Exhale', duration: 8, color: '#6AC66B' }
];

const FULL_DASH_ARRAY = 283;
let currentPhaseIndex = 0;
let timeLeft = PHASES[currentPhaseIndex].duration;
let timerInterval = null;

// Update timer display with initial time left
updateTimerDisplay();

function startTimer() {
    timerInterval = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateTimerDisplay();
        } else {
            if (currentPhaseIndex < PHASES.length - 1) {
                currentPhaseIndex++;
            } else {
                currentPhaseIndex = 0;
            }
            timeLeft = PHASES[currentPhaseIndex].duration;
            updateTimerDisplay();
        }
    }, 1000);
}
function updateTimerDisplay() {
    const phase = PHASES[currentPhaseIndex];
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const totalDuration = PHASES.reduce((acc, curr) => acc + curr.duration, 0);
    const passedTime = PHASES.slice(0, currentPhaseIndex).reduce((acc, curr) => acc + curr.duration, 0) + (phase.duration - timeLeft);
    const rotationAngle = -(passedTime / totalDuration) * 360;
    document.getElementById("base-timer-label").textContent = `${phase.phase}`;
    setCircleDasharray(phase.duration);
    setRemainingPathColor(phase.color);
    const baseTimer = document.querySelector('.base-timer');
    if (timerInterval) {
        baseTimer.classList.add('running');
    } else {
        baseTimer.classList.remove('running');
    }
    // const rotationAngle = -(360 / PHASES[currentPhaseIndex].duration) * (phase.duration - timeLeft);
    // Apply rotation angle to the pointer element
    const pointer = document.getElementById('pointer');
    pointer.style.transform = `rotate(${rotationAngle}deg) translate(0)`;
}

function setRemainingPathColor(color) {
    const remainingPath = document.getElementById("base-timer-path-remaining");
    remainingPath.style.stroke = color;
}

function calculateTimeFraction(duration) {
    return duration / PHASES[currentPhaseIndex].duration;
}

function setCircleDasharray(duration) {
    const circleDasharray = `${(calculateTimeFraction(duration) * FULL_DASH_ARRAY).toFixed(0)} 283`;
    document.getElementById("base-timer-path-remaining").setAttribute("stroke-dasharray", circleDasharray);
}

document.addEventListener('DOMContentLoaded', startTimer);
