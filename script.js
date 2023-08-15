const quotes = [
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "Innovation distinguishes between a leader and a follower.",
        author: "Steve Jobs"
    },
    {
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        text: "The secret of getting ahead is getting started.",
        author: "Mark Twain"
    }
];

const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const generateBtn = document.getElementById('generate-btn');

generateBtn.addEventListener('click', generateRandomQuote);

function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteText.textContent = `"${randomQuote.text}"`;
    authorText.textContent = `- ${randomQuote.author}`;
}
