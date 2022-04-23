const quotes = [
    {
        quote : "He that is not handsome at twenty, nor strong at thirty, nor rich at forty, nor wise at fifty, will never be handsome, strong, rich or wise.",
        author : "George Herbert1"
    },
    {
        quote : "He that is not handsome at twenty, nor strong at thirty, nor rich at forty, nor wise at fifty, will never be handsome, strong, rich or wise.",
        author : "George Herbert2"
    },
    {
        quote : "He that is not handsome at twenty, nor strong at thirty, nor rich at forty, nor wise at fifty, will never be handsome, strong, rich or wise.",
        author : "George Herbert3"
    },
    {
        quote : "He that is not handsome at twenty, nor strong at thirty, nor rich at forty, nor wise at fifty, will never be handsome, strong, rich or wise.",
        author : "George Herbert4"
    },
    {
        quote : "He that is not handsome at twenty, nor strong at thirty, nor rich at forty, nor wise at fifty, will never be handsome, strong, rich or wise.",
        author : "George Herbert5"
    },
    {
        quote : "He that is not handsome at twenty, nor strong at thirty, nor rich at forty, nor wise at fifty, will never be handsome, strong, rich or wise.",
        author : "George Herbert6"
    },
    {
        quote : "He that is not handsome at twenty, nor strong at thirty, nor rich at forty, nor wise at fifty, will never be handsome, strong, rich or wise.",
        author : "George Herbert7"
    },
    {
        quote : "He that is not handsome at twenty, nor strong at thirty, nor rich at forty, nor wise at fifty, will never be handsome, strong, rich or wise.",
        author : "George Herbert8"
    },
    {
        quote : "He that is not handsome at twenty, nor strong at thirty, nor rich at forty, nor wise at fifty, will never be handsome, strong, rich or wise.",
        author : "George Herbert9"
    },
    {
        quote : "He that is not handsome at twenty, nor strong at thirty, nor rich at forty, nor wise at fifty, will never be handsome, strong, rich or wise.",
        author : "George Herbert0"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const toDaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = toDaysQuote.quote;
author.innerText = toDaysQuote.author;