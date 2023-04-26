let quotes = [];
const url = "https://type.fit/api/quotes";

const quoteElement = document.getElementById("text");
const authorElement = document.getElementById("author");
const quoteContainer = document.querySelector("#quote-box");
const button_New_Quote = document.getElementById("new-quote");

async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    quotes = [...data];
  } catch (error) {
    console.log(error);
  }
}

fetchData().then(() => {
  generateQuote(); // Display initial quote
  button_New_Quote.addEventListener("click", generateQuote);
});

function generateQuote() {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.textContent = quotes[randomIndex].text;
  authorElement.textContent = quotes[randomIndex].author;
}
