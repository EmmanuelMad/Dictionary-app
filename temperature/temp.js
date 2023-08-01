let header = document.querySelector(".header")
let celsius = document.querySelector(".celsius")
let kelvin = document.querySelector(".kelvin")
let fahrenheit = document.querySelector(".fahrenheit")
let celsius_output = document.querySelector(".celsius_output")
let kelvin_output = document.querySelector(".kelvin_output")
let fahrenheit_output = document.querySelector(".fahrenheit_output")
let convert_btn = document.querySelector(".convert_btn")

convert_btn.addEventListener("click", convert)

function convert(e) {
    if((celsius.value && kelvin.value && fahrenheit.value) || (celsius.value && kelvin.value) || (kelvin.value && fahrenheit.value) || (celsius.value && fahrenheit.value)) {
        header.textContent = `Enter a value in ONE box`
    }
    else {
        if (celsius.value) {
            fahrenheit_output.textContent = ((celsius.value * 1.8) + 32).toFixed(2)
            kelvin_output.textContent = (celsius.value + 273.15).toFixed(2)
            celsius_output.textContent = celsius.value
        }

        if (kelvin.value) {
            celsius_output.textContent = (kelvin.value - 273.15).toFixed(2)
            fahrenheit_output.textContent = (((kelvin.value - 273.15) * 1.8) + 32).toFixed(2)
            kelvin_output.textContent = kelvin.value
        }

        if (fahrenheit.value) {
            celsius_output.textContent = ((fahrenheit.value - 32) * 1.8).toFixed(2)
            kelvin_output.textContent = (((fahrenheit.value - 32) * 1.8) + 273.15).toFixed(2)
            fahrenheit_output.textContent = fahrenheit.value
        }
    }
    
}