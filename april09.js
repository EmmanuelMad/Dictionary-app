// nexted loops

// for (let i =1; i <=3; i++) {
//     console.log("num at i:",i)
//     for(let j = 1; j <= 5; j++){
//         console.log(j)
//     }
// }

// const arr = [
//     ['A','B'],// 0
//     ['C','D'],// 1
//     ['E','F'],// 2
// ]

// for (let j = 0; j <= arr.length - 1; j++) {
//     let subArr = arr[j] 
//     //console.log(arr[j])
//     for (let k = 0; k <= subArr.length - 1; k++) {
//         console.log(subArr[k])
//     }
// }

let arr2 = ["artichoke","broccoli","carrot","daikon"]
// artichoke - broccoli
// artichoke -carrot
// artichoke - daikon
// broccoli - carrot
// broccoli - daikon
// carrot - daikon

// function pairPrint(arr) {
//     // let result = []
//    for (let i = 0; i <= arr.length -1; i++) {
//         // console.log('ANSWER',arr[i])
//         for (let j = i + 1; j <= arr.length -1; j++) {
//             console.log(arr[i]+ " - " + arr[j])
//         }
        
//    } 
// //    return result
// }
// console.log(pairPrint(arr2))

// function twoSum(numbers, target) {
//     for (let k = 0; k <= numbers.length - 1; k++) {
//         for (let l = k + 1; l <= numbers.length - 1; l++) {
//             if((numbers[k] + numbers[l]) == target) {
//                 return true
//             }
//         }
//     }
//     return false
// }
// console.log(twoSum([2,3,5,9], 18))
// [2,3,5,9] 
//2 + 3
//2 + 5
//2 + 9

//3 + 5
//3 + 9

//5 + 9

// Write a function makeMatrix(m,n,value) that accepts 3 arguments. The function should return a 2-dimensional array of row 'r' and column 'c 
// that contains the value as every element

// makeMatrix(3,5, 'Js')
// [
//     [Js,Js,Js,Js,Js],
//     [Js,Js,Js,Js,Js],
//     [Js,Js,Js,Js,Js]
// ]

// function makeMatrix(r,c,value) {  // i = 0 row = [], j = 0 row = [js,js,js,js,js]
//     let matrix = []                     //  i = 1 row = [], j = 0 row = [js,js,js,js,js]
//     for (let i = 0; i < r; i++) {   // i = 2 row = [], j = 0 row = [js,js,js,js,js]
//         let row = []
//         for (let j = 0; j < c; j++) {
//             row.push(value)
//         }
//         matrix.push(row);
//     }
//     return matrix;
// }
// console.log(makeMatrix(3,5,'Js'))

//[2,3,4,6,5] target  = 8, [2,6] [3,5]

function twoSum(numbers, target) {
    let result = []
    for (let k = 0; k <= numbers.length - 1; k++) {
        for (let l = k + 1; l <= numbers.length - 1; l++) {
            if((numbers[k] + numbers[l]) == target) {
                let pair = [numbers[k], numbers[l]]
                result.push(pair)
            }
        }
    }
    return result
}
console.log(twoSum([2,3,5,6,9], 11))

// function removeVowels(str) {
//     let vowels = ["a", "e", "i", "o", "u"]
//     let blank = []
//     for (m = 0; m <= str.length - 1; m++) {
//         if (!vowels.includes(str[m])) {
//             blank.push(str[m])
//         }
//     }
//     return blank.join("")

// }
// console.log(removeVowels("jello"))
function removeVowels(str) {
    let vowels = ["a", "e", "i", "o", "u"]
    let blank = ""
    for (m = 0; m <= str.length - 1; m++) {
        if (!vowels.includes(str[m])) {
            blank += str[m]
        }
    }
    return blank

}
console.log(removeVowels("jello"))

// includes
// let letters = ['a','e','i']
// console.log(letters.includes('f'))

function shortenLongWords(str2) {
    let vowels = ["a", "e", "i", "o", "u"]
    let words = str2.split(" ")
    let str = []
    for (p = 0; p <= words.length - 1; p++) {
        if (words[p].length > 4) {
            let removedVowels = removeVowels(words[p])
            str.push(removedVowels)
        }
    }
    return str.join(" ")
}
console.log(shortenLongWords("I am a sofware engineer"))
// let str = "I am a sofware engineer"
// console.log(str.split(' '))