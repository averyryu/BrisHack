//  // Check browser support for SpeechRecognition
//     if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
//     const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
//
//     // Set recognition language
//     recognition.lang = 'en-US';
//
//     // Event handler for when speech recognition starts
//     recognition.onstart = function() {
//     document.getElementById('output').textContent = 'Listening...';
// };
//
//     // Event handler for when speech recognition results are available
//     recognition.onresult = function(event) {
//     const transcript = event.results[0][0].transcript;
//     document.getElementById('output').textContent = 'You said: ' + transcript;
// };
//
//     // Event handler for speech recognition errors
//     recognition.onerror = function(event) {
//     document.getElementById('output').textContent = 'Error occurred: ' + event.error;
// };
//
//     // Event handler for when speech recognition ends
//     recognition.onend = function() {
//     document.getElementById('start-btn').textContent = 'Start Listening';
// };
//
//     // Event handler for button click to start speech recognition
//     document.getElementById('start-btn').addEventListener('click', function() {
//     if (recognition.running) {
//     recognition.stop();
//     document.getElementById('start-btn').textContent = 'Start Listening';
// } else {
//     recognition.start();
//     document.getElementById('start-btn').textContent = 'Stop Listening';
//     document.getElementById('output').textContent = 'Listening...';
// }
// });
// } else {
//     document.getElementById('output').textContent = 'Speech recognition is not supported in your browser.';
// }
// Check browser support for SpeechRecognition
if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    let isListening = false;

    // Set recognition language
    recognition.lang = 'en-US';

    // Reference to the output text box
    const outputTextBox = document.getElementById('output');

    // Event handler for when speech recognition starts
    recognition.onstart = function() {
        outputTextBox.value = 'Listening...';
    };

    // Event handler for when speech recognition results are available
    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        outputTextBox.value = transcript; // Set the value of the text box
    };

    // Event handler for speech recognition errors
    recognition.onerror = function(event) {
        outputTextBox.value = 'Error occurred: ' + event.error;
    };

    // Event handler for when speech recognition ends
    recognition.onend = function() {
        document.getElementById('start-btn').style.backgroundImage = "url('../images/mic.png')"; // Change background to microphone icon
        isListening = false;
    };

    // Function to toggle speech recognition
    function toggleRecognition() {
        if (isListening) {
            recognition.stop();
            isListening = false;
            document.getElementById('start-btn').style.backgroundImage = "url('../images/mic.png')"; // Change background to microphone icon
            outputTextBox.value = 'Recognition stopped.';
        } else {
            recognition.start();
            isListening = true;
            document.getElementById('start-btn').style.backgroundImage = "url('../images/mic.png')"; // Change background to active microphone icon
            outputTextBox.value = 'Listening...';
        }
    }
    function saveText() {
        const textToSave = outputTextBox.value;
        localStorage.setItem('transcribedText', textToSave);
        alert('Text saved to local storage!');
    }
    // Event handler for button click to toggle speech recognition
    document.getElementById('start-btn').addEventListener('click', toggleRecognition);
    document.getElementById('save-btn').addEventListener('click', saveText);
} else {
    document.getElementById('output').value = 'Speech recognition is not supported in your browser.';
}


