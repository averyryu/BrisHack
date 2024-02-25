const quoteCard = document.getElementById('quoteCard');
const quoteCard_next = document.getElementById('quoteCard-next');
const swipeLeft = document.getElementById('swipeLeft');
const swipeRight = document.getElementById('swipeRight');

const quotes = [
    "This is quote 1.",
    "This is quote 2.",
    "This is quote 3.",
    "This is quote 4."
    // Add more quotes as needed
];

let currentQuoteIndex = 0;

function swipe(direction) {
    if (direction === 'left') {
        loadPreviousQuote();
    } else if (direction === 'right') {
        loadNextQuote();
    }
}

function changeOpacity(timestamp, startOpacity, endOpacity, startTime) {
    let duration = 300;
    let progress = timestamp - startTime; // Calculate the progress based on the startTime
    let opacity = startOpacity + (endOpacity - startOpacity) * progress / duration;
    quoteCard.style.opacity = opacity;
    if (progress < duration) {
        requestAnimationFrame(timestamp => changeOpacity(timestamp, startOpacity, endOpacity, startTime));
    }
}

function loadPreviousQuote() {
    quoteCard.style.opacity = "0"
    quoteCard.style.transform = 'translateX(-100%) rotate(-13deg)';

    quoteCard_next.innerHTML = `<p>${quotes[currentQuoteIndex]}</p>`;
    currentQuoteIndex--;

    // End over if reached the front
    if (currentQuoteIndex < 0) {
        currentQuoteIndex = quotes.length - 1;
    }
    quoteCard.innerHTML = `<p>${quotes[currentQuoteIndex]}</p>`;

    // Display the next quote
    setTimeout(() => {
        requestAnimationFrame(timestamp => changeOpacity(timestamp, 0, 1, performance.now()));
        quoteCard.style.transform = 'rotate(0) translateX(0)';
    }, 300);
}

function loadNextQuote() {
    currentQuoteIndex++;

    // Start over if reached the end
    if (currentQuoteIndex >= quotes.length) {
        currentQuoteIndex = 0;
    }

    // Display the next quote
    quoteCard_next.innerHTML = `<p>${quotes[currentQuoteIndex]}</p>`;

    quoteCard.style.transform = 'translateX(100%) rotate(13deg)';
    requestAnimationFrame(timestamp => changeOpacity(timestamp, 1, 0, performance.now()));
    setTimeout(() => {
        quoteCard.style.transform = 'rotate(0) translateX(0)';
        quoteCard.innerHTML = `<p>${quotes[currentQuoteIndex]}</p>`;
        quoteCard.style.opacity = "1"
    }, 300);
}
