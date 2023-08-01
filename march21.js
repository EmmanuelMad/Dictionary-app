//let word = "jessica"
// slice function
//let result = word.slice(-3)
//console.log(result)
// ===============================================

// indexOf function
// let word = "abraham"
// let result = word.indexOf('b')
// let result = word.indexOf('m')
// let result = word.indexOf('t')
// let result = word.indexOf('h') > -1

// console.log(result)

// Write a function "inRange"  that accepts 3 numbersas arguments(min,max,num). The function should return a boolean indicating if num is between min and max inclusive
/// and &&
//  or  ||

// function inRange(min, max, num) {
//     if((num > min) && (num <= max)) {
//         return true
//     }
//     return false
// }

// console.log(inRange(3, 10, 12))

// Write a function that accepts a numberr as an argument. The function should return half the number if it is even and return double the numberif it is odd
// function evenNumber(num) {
//     if(num % 2 === 0) {
//         return num/2
//     }
//     else {
//         return num * 2
//     }
// }
// console.log(evenNumber(13))

// Write a function contains(str1, str2) that accepts 2 strings as arguments. The function should return a boolean indicating whether or not str2
// is contained within str1......... contains('catapillar','pill')
// function contains(str1, str2) {
//     // str1 = str1.toLowerCase()
//     // str2 = str2.toLowerCase()
//     if(str1.toLowerCase().indexOf(str2.toLowerCase()) > -1) {
//         return true
//     }
//     return false
// }
// console.log(contains("catapillar","Pill"))

// Write a function 'longer' that accepts 2 strings as arguments.  The function should return the string that is longer. 
// If the strings have got the same length, then return "same length"

// function longer(len1, len2) {
//     let num1 = len1.length
//     let num2 = len2.length
//     if(num1 > num2) {
//         return len1
//     }
//     else if(num2 > num1) {
//         return len2
//     }
//     else {
//         return "Same length"
//     }
// }
// console.log(longer("name", "game"))

// Concatenations
// let str1 = 'arsenal'
// let str2 = ' fc'
// let num1 = 20
// let num2 = 35

// let result = str1 + str2 + ' is a football club in England'
// // Template Literals
// // let result = `${str1}${str2} is a football club`
// console.log(result)

// Write a function that accepts 2 strings as arguments. The function should return a string containing the first 3 characters of the first string 
// concatenated with the last 2 characters of the second string

// function concatinateStrings(str1, str2) {
//     let firstThree = str1.slice(0, 3)
//     let lastTwo = str2.slice(-2)
//     let full = `${firstThree}${lastTwo}`
//     return full
// }
// console.log(concatinateStrings("Truth", "Happy"))

// ASSIGNMENT
// ================
1. // Write a function 'stringSize' that accepts a string as an argument, The function should return string 'small' if the argument is shorter than 5 characters,
// 'medium' if it is exactly 5 characters and 'large' if longer than 5 character

2. // Write a function 'endsInLy' that accepts a string as an argument and returns a boolean indicating whether or not the string ends with the substring 'ly'

/* 1 */
function stringSize(srng) {
    let stringNumber = srng.length
    if(stringNumber < 5) {
        return "small"
    }
    else if(stringNumber == 5) {
        return "medium"
    }
    else {
        return "large"
    }
}
console.log(stringSize("hallow")) 

/* 2 */
function endsInLy(wordly) {
    let ly = wordly.slice(-2)
    if(ly == "ly") {
        return true
    }
    else {
        return false
    }
}
console.log(endsInLy("lovely"))