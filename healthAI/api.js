// const { CohereClient } = require("cohere-ai");
// const {response} = require("express");
//
// const cohere = new CohereClient({
//     token: "oMAjSR2qS6SCrobemgS3a2t55ZSGSE5Xu6d8dNoN",
// });
//
//
// (async () => {
//     const classify = await cohere.classify({
//         examples: [
//             { text: "Dermatologists don't like her!", label: "Spam" },
//             { text: "'Hello, open to this?'", label: "Spam" },
//             { text: "I need help please wire me $1000 right now", label: "Spam" },
//             { text: "Nice to know you ;)", label: "Spam" },
//             { text: "Please help me?", label: "Spam" },
//             { text: "Your parcel will be delivered today", label: "Not spam" },
//             { text: "Review changes to our Terms and Conditions", label: "Not spam" },
//             { text: "Weekly sync notes", label: "Not spam" },
//             { text: "'Re: Follow up from today's meeting'", label: "Not spam" },
//             { text: "Pre-read for tomorrow", label: "Not spam" },
//         ],
//         inputs: [
//             "Confirm your email address",
//             "hey i need u to send some $",
//         ],
//     })
//
//     console.log(response);
// })();
// const cohere = require('cohere-ai');
// cohere.init('oMAjSR2qS6SCrobemgS3a2t55ZSGSE5Xu6d8dNoN')
const { CohereClient } = require("cohere-ai");

const cohere = new CohereClient({
    token: "oMAjSR2qS6SCrobemgS3a2t55ZSGSE5Xu6d8dNoN",
});
const examples = [
    { text: 'The order came 5 days early', label: 'positive review' },
    { text: 'The item exceeded my expectations', label: 'positive review' },
    { text: 'I ordered more for my friends', label: 'positive review' },
    { text: 'I would buy this again', label: 'positive review' },
    { text: 'I would recommend this to others', label: 'positive review' },
    { text: 'The package was damaged', label: 'negative review' },
    { text: 'The order is 5 days late', label: 'negative review' },
    { text: 'The order was incorrect', label: 'negative review' },
    { text: 'I want to return my item', label: 'negative review' },
    { text: "The item's material feels low quality", label: 'negative review' },
    { text: 'The product was okay', label: 'neutral review' },
    { text: 'I received five items in total', label: 'neutral review' },
    { text: 'I bought it from the website', label: 'neutral review' },
    { text: 'I used the product this morning', label: 'neutral review' },
    { text: 'The product arrived yesterday', label: 'neutral review' },
];
const inputs = [
    'This item was broken when it arrived',
    'The product is amazing',
    'The product was not too bad',
];

(async () => {
    const response = await cohere.classify({
        inputs: inputs,
        examples: examples,
    });
    console.log(response);
})();