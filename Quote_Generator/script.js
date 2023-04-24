//prettier-ignore
const quotes = [
    {quote: "The only way to do great work is to love what you do.", author: "- Steve Jobs -"},
    {quote: "Believe you can and you're halfway there.", author: "- Theodore Roosevelt -"},
    {quote: "In the middle of every difficulty lies opportunity.", author: "- Albert Einstein -"},
    {quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "- Winston Churchill -"},
    {quote: "The best way to predict the future is to create it.", author: "- Peter Drucker -"},
    {quote: "The secret of getting ahead is getting started.", author: "- Mark Twain -"},
    {quote: "Dream big and dare to fail.", author: "- Norman Vaughan -"},
    {quote: "The harder you work for something, the greater you'll feel when you achieve it.", author: "- Unknown -"},
    {quote: "It does not matter how slowly you go, as long as you do not stop.", author: "- Confucius -"},
    {quote: "The only thing standing between you and your goal is the story you keep telling yourself.", author: "- Jordan Belfort -"}
  ];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quoteElement = document.getElementById("quote");
  const authorElement = document.getElementById("author");
  const quoteContainer = document.querySelector(".quote-container");
  const body = document.body;

  // Add fade-out effect
  quoteContainer.classList.remove("fade-in");
  body.classList.remove("fade-in");

  setTimeout(() => {
    quoteElement.textContent = quotes[randomIndex].quote;
    authorElement.textContent = quotes[randomIndex].author;

    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    body.style.backgroundColor = "#" + randomColor;

    // Add fade-in effect
    quoteContainer.classList.add("fade-in");
    body.classList.add("fade-in");
  }, 500);
}

generateQuote(); // Display initial quote
setInterval(generateQuote, 10000); // Generate a new quote every 10 seconds
