const quotes = [
    {
        quote : "He that is not handsome at twenty, nor strong at thirty, nor rich at forty, nor wise at fifty, will never be handsome, strong, rich or wise.",
        author : "George Herbert1"
    },
    {
        quote : "Nothing is as far away as one minute ago.",
        author : "Jim Bishop"
    },
    {
        quote : "The rest is silence.",
        author : "William Shakespeare"
    },
    {
        quote : "Experience is a dear teacher, but fools will learn at no other.",
        author : "Benjamin Franklin"
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const toDaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = toDaysQuote.quote;
author.innerText = toDaysQuote.author;