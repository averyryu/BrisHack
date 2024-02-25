// moodTracker.js
function saveMoodData(feeling, image, description) {
    // Assuming each entry has a unique timestamp
    const timestamp = new Date().toISOString();

    // Get existing mood data from local storage or initialize an empty array
    const existingData = JSON.parse(localStorage.getItem('moodData')) || [];

    // Add the new entry
    existingData.push({
        timestamp,
        feeling,
        image,
        description,
    });

    // Save the updated mood data to local storage
    localStorage.setItem('moodData', JSON.stringify(existingData));
}
