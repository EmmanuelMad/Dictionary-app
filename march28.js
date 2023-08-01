let str = "computer"
// conver the above string into an array
let arr = str.split('')
let backToSring = arr.join('')
// console.log(backToSring)
// console.log(arr.slice(0,3).join(''))
// console.log(arr.splice(0,3))
// let tempVal = arr.slice(0,3)
// console.log('tempVal',tempVal)
// console.log('original array',arr)
// let nums_array = [10,20,30]
// nums_array.push(40)
// nums_array.unshift(50)
// nums_array.pop()
// nums_array.shift()
// console.log(nums_array)

/*
    Write a function bleepVowels that accept a string as an argument. The function should return a new string where all vowels are 
    replaced with "*"s. 

    console.log(bleepVowels("skateboard"))  sk*t*b**rd
*/

// function bleepVowels(strng) {
//     name = ""
//     for(let k = 0; k <= strng.length - 1; k++) {
//         let word = strng[k]
//         if((word == "a") || (word == "e") || (word == "i") || (word == "o") || (word == "u")) {
//             name += "*"
//         }
//         else {
//             name += word
//         }
//     }
//     return name
// }
// console.log(bleepVowels("skateboard"))

function bleepVowels(str) {
   let vowels = ['a', 'e', 'i', 'o','u']
   let name = ""
   for (let i = 0; i < str.length; i++) {
    //Hey vowels array, check to see if the letters in th word 'skateboard' are present in your array
        if (vowels.indexOf(str[i]) > -1) {
            name += "*"
        }else{
            name += str[i]
        }
   }
   return name;
}
console.log(bleepVowels("skateboard"))

function divisors(num) {
    //let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    let arr = []
    for (let n = 0; n <= num; n++) {
        if (num % n == 0) {
            arr.push(n)
        }
    }
    return arr
}
console.log(divisors(20))

function filterLongWords(placesArray) {
    let arr = []
    for(let i = 0; i < placesArray.length; i++){
        let place = placesArray[i]
        //console.log(place)
        if(place.length < 5) {
            arr.push(place)
        }
    }
    return arr
}
let places = ['lagos','la','london','lisbon','sow','jar','new york','texas','manchester']
console.log(filterLongWords(places))

function findTotal(numberArray) {
    let total = 0
    for(let m = 0; m <= numberArray.length - 1; m++) {
        let number = numberArray[m]
        console.log('index ' + m + ' value: ' + number)
        total = total + number
    }
    return total
}
console.log(findTotal([10, 20, 30, 40, 50]))

//let places =  ['lagos','la','london','lisbon','sow','jar','new york','texas','manchester'] //['la','sow','jar']

function stayPositive(realNumbers) {
    let arr = []
    for(let g = 0; g <= realNumbers.length - 1; g++) {
        let number = realNumbers[g]
        console.log(number)
        if(number > 0) {
            arr.push(number)
        }
    }
    return arr
}
console.log(stayPositive([10, -4, 3, -6]))