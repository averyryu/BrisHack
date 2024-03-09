// function analyzeText() {
//     const API_KEY = 'oMAjSR2qS6SCrobemgS3a2t55ZSGSE5Xu6d8dNoN'; // Replace 'your-api-key' with your actual Cohere API key
//     const text = document.getElementById('input-text').value;
//
//     axios.post('https://api.cohere.ai/classify', { text: text }, {
//         headers: {
//             'Authorization': `Bearer ${API_KEY}`,
//             'Content-Type': 'application/json'
//         }
//     })
//         .then(response => {
//             const result = response.data;
//             document.getElementById('analysis-result').innerText = JSON.stringify(result, null, 2);
//         })
//         .catch(error => {
//             console.error('Error analyzing text:', error);
//             document.getElementById('analysis-result').innerText = 'Error: ' + error.message;
//         });
// }
const { CohereClient } = require("cohere-ai");

const cohere = new CohereClient({
    token: "<<oMAjSR2qS6SCrobemgS3a2t55ZSGSE5Xu6d8dNoN>>",
});

(async () => {
    const classify = await cohere.classify({
        examples: [
            { text: "Dermatologists don't like her!", label: "Spam" },
            { text: "'Hello, open to this?'", label: "Spam" },
            { text: "I need help please wire me $1000 right now", label: "Spam" },
            { text: "Nice to know you ;)", label: "Spam" },
            { text: "Please help me?", label: "Spam" },
            { text: "Your parcel will be delivered today", label: "Not spam" },
            { text: "Review changes to our Terms and Conditions", label: "Not spam" },
            { text: "Weekly sync notes", label: "Not spam" },
            { text: "'Re: Follow up from today's meeting'", label: "Not spam" },
            { text: "Pre-read for tomorrow", label: "Not spam" },
        ],
        inputs: [
            "Confirm your email address",
            "hey i need u to send some $",
        ],
    })

    console.log(classify);
})();