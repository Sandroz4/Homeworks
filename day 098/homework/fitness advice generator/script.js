const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const newQuoteBtn = document.getElementById('new-quote-btn');

async function getQuote() {
    try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        quoteText.textContent = data.content;
        quoteAuthor.textContent = `- ${data.author}`;
    } catch (error) {
        console.log('Error fetching quote:', error);
        quoteText.textContent = 'Failed to fetch quote. Please try again later.';
        quoteAuthor.textContent = '';
    }
}

newQuoteBtn.addEventListener('click', getQuote);
getQuote();
