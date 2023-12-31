let arrOfQuote = [
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote:
      "Believe you can, and you're halfway there. Your mindset determines your success.",
    author: "Theodore Roosevelt",
  },
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    quote:
      "Don't watch the clock; do what it does. Keep going, and success will find you.",
    author: "Sam Levenson",
  },
  {
    quote:
      "Your time is limited, so don't waste it living someone else's life. Follow your passion relentlessly.",
    author: "Steve Jobs",
  },
  {
    quote:
      "The only limit to our realization of tomorrow will be our doubts of today. Overcome doubt with action.",
    author: "Franklin D. Roosevelt",
  },
  {
    quote:
      "The way to get started is to quit talking and begin doing. Action is the key to achievement.",
    author: "Walt Disney",
  },
  {
    quote:
      "It always seems impossible until it's done. Break your goals into small steps and conquer them.",
    author: "Nelson Mandela",
  },
  {
    quote:
      "You are never too old to set another goal or to dream a new dream. Embrace change and keep dreaming.",
    author: "C.S. Lewis",
  },
  {
    quote:
      "The only person you are destined to become is the person you decide to be. Your choices shape your destiny.",
    author: "Ralph Waldo Emerson",
  },
];

let quoteSection = document.querySelector("section");
let quoteContainer = document.querySelector("h2");
let authorContainer = document.querySelector("p");
let genBtn = document.querySelector("button");
let body = document.body;

document.addEventListener("DOMContentLoaded", quoteGenerator);

genBtn.addEventListener("click", quoteGenerator);

function quoteGenerator() {
  let index = Math.floor(Math.random() * arrOfQuote.length);
  let quoteObj = arrOfQuote[index];

  quoteContainer.textContent = `${quoteObj.quote}`;
  authorContainer.textContent = `- ${quoteObj.author}`;

  let randomTextColor = getRandomTextColor();
  quoteContainer.style.color = randomTextColor;
  authorContainer.style.color = randomTextColor;

  function getRandomTextColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
  }

  let randomBGColor = getRandomColor();
  quoteSection.style.backgroundColor = randomBGColor;
  body.style.backgroundColor = randomTextColor;

  function getRandomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
  }
}
