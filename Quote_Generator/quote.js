const quotes = [
    {
        quote: "If you want to live a happy life, tie it to a goal, not to perple or things",
        person: "Albert Eistein",
    },
    {
        quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn",
        person: "Benjamein Franklein",
    },
    {
        quote: "The best way to find youself is to lose yourself in the service of others",
        person: "Mahatma Ganhi",
    },
    {
        quote: "Your time is limied. Do not waste it living someone else's life",
        person: "Steve Jobs",
    },
    {
        quote: "At his best, man is the noblest of all animals; separated from law and justice, he is the worst",
        person: "Aristotle",
    },
    {
        quote: "If you look at what you have in life, you wil always have more - If you dont look at what you have in life, you will never have enough",
        person: "Oprah Winfrey",
    },
    {
        quote: "It doesn't matter how slowly you go in life as long as you don't stop",
        person: "Confucius",
    },
    {
        quote: "Remember that not getting what you want is sometimes a wonderful stroke of luck",
        person: "Dalai Lema",
    },
    {
        quote: "The journey to a thousand miles begins one step",
        person: "Lao Tzu",
    },
    {
        quote: "A persn's life begins to end the days he becomes silent abou the thngs that matter",
        person: "Lao Tzu",
    }
]

let author = document.querySelector(".header_item")
let quote = document.querySelector(".body_item")
let btn = document.querySelector(".quote_btn")
console.log(author,quote,btn)

btn.addEventListener("click",function(){
    let i = Math.floor(Math.random() * quotes.length)
    let arr_object = quotes[i]
    let arr_quote = arr_object.quote
    let arr_person = arr_object.person
    author.innerText = arr_person
    quote.textContent = arr_quote
})