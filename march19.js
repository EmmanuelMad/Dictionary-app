// write a function that accepts a number as an argment. The function should return a Boolean value whether 
// or not the number is divisible by 4

// function divide(x) {
//     if(x % 4 === 0){
//         return true
//     }
//     return false
//     return x % 4 === 0

// }
// let result = divide(11)
// console.log(result)

/* Write a function *that accepts a string as an argument and returns the upper case version of the string*/
// let name = "JAVASCRIPT"
// console.log(name.toLowerCase())

// function capital(text) {
//     return text.toUpperCase()
// }
// console.log(capital("hello!"))

//let name = "jessica"
//let findLength = name.length
// console.log(findLength)
// console.log(name[1])
// console.log(name[4])
// console.log(name.indexOf('i'))
// console.log(name.indexOf('a'))
// console.log(name.indexOf('s'))
// console.log(name.indexOf('g'))
// console.log(name[0])
// let lastItem = name[name.length - 1]
// console.log(lastItem)

/*
1. Write a function that accepts a string as an argument. The function should return a boolean indicating whether or not
the string ends with the character 't' .

2.Write a function that accepts 3 numbers as arguments. The function should return the average of the 3 numbers.

3. Write a function that accepts a number as an argument and return half the number.
*/

/* 1. */
function tee(word) {
    let lastT = word[word.length - 1]
    if(lastT == "t") {
        return true
    }
    return false
}
console.log(tee("okay"))

/* 2 */
function average(x, y, z) {
    return (x + y + z)/3
}
console.log(average(3, 4, 5))

/* 3 */
function half(h) {
    return h/2
}
console.log(half(16))