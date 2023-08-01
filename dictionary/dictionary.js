let title = document.querySelector(".title")
let search = document.querySelector(".search")
let search_btn = document.querySelector(".search_btn")
let word = document.querySelector(".word")
let definition = document.querySelector(".definition")

search_btn.addEventListener("click", async function (event){
    await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search.value}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        word.textContent = data[0].word
        definition.textContent = data[0].meanings[0].definitions[0].definition
    })
})
// console.log(search)
search.addEventListener("keyup", async (event) =>{
    if (event.key === "Enter") {
        await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search.value}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            word.textContent = data[0].word
            definition.textContent = data[0].meanings[0].definitions[0].definition
        })
         
    }
})