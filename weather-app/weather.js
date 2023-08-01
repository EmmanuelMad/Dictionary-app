let locate = document.querySelector(".locate")
let place = document.querySelector(".exact_place")
let temperature = document.querySelector(".exact_temperature")
let humidity = document.querySelector(".exact_humidity")
let pressure = document.querySelector(".exact_pressure")
let season = document.querySelector(".exact_season")
let submit = document.querySelector(".submit")
console.log(locate)
console.log(place)
console.log(temperature)
console.log(season)
console.log(submit)
console.log(pressure)
console.log(humidity)

submit.addEventListener("click",async function (e){
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locate.value}&appid=21d4a58215244f0e7cea3e793361fbb4`)
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data)
        place.textContent = data.name
        temperature.textContent = `${data.main.temp} degrees`
        season.textContent = data.weather[0].description
        humidity.textContent = `${data.main.humidity}%`
        pressure.textContent = `${data.main.pressure} isobars`
        
    })
    .catch((error)=>{
        console.log(error)
    })
})