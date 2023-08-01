// LOOPS

// for loops
// while loops
// do while loop

//for(Start, condition,keep running)
/*let name = "biden"
let president = ""
for(let index = 0; index <= name.length - 1; index += 1){
    president += name[index]
}
console.log(president); */

// let num = 5
// num += 3
// console.log(num)

// for(let i = 2; i<= 10; i += 2) {
//     console.log(i)
// }
// Are you there ?

//Yes, but I can't hear you properly
// same here..can't hear
// I'd send another zoom link
//Ok
// function evenNumbers(num){
//     for(let x = 0; x <= num;x+=1){
//         if (x % num == 2) {
//             console.log(x)
//         }
//     }
// }

// Write a function that defines the time tabe of any given number ranging from 1-12
// 7 X 1 = 7
// 7 X 2 = 14
//.
//.
//.
//7 x 12 = 84

/* function timeTable(times) {
    for(let x = 1; x <= 12; x++) {
        console.log(times + " X " + x + " = " + times*x)
    }
}
// I leave the meeting temporarily and get back on
console.log(timeTable(4)) */

/* function sumUpTo(max) {
    let total = 0
    for(let y = 0; y <= max; y++) {
        total = total + y
    }
    return total
}
console.log(sumUpTo(6)) */

// function noOhs(str) {
//     let name = ""
//     for(let i = 0; i <= str.length - 1; i++) {
//         let word = str[i]
//         if(word != "o") {
//             name = name + word
//         }
//     }
//     return name
// }
// console.log(noOhs("colour"))

// function censorE(str) {
//     let name = ""
//     for(let j = 0; j <= str.length - 1; j++) {
//         let word = str[j]
//         if (word === 'e') {
//             name += word
//         }else{
//             name += word
//         }
//     }
//     return name
// }
// console.log(censorE("Hehe"))
// let arr = [10,20,3040]
// function raisePower(base, exponent) {
//     let total = 1
//     for(let l = 1; l <= exponent; l++) {
//         total = total * base 
//     }
//     return total
// }
// console.log(raisePower(4, 3))

// function removeCapitals(word) {
//     let lower = ""
//     for(let k = 0; k <= word.length - 1; k++) {
//         let letter = word[k]
//         if(letter == letter.toLowerCase()) {
//             lower = lower + letter
//         }
//     }
//     return lower
// }
// console.log(removeCapitals("HeHeHeHe"))

function reverseIterate(str) {
    let name = ""
    for(let m = str.length - 1; m >= 0; m--) {
        name = name + str[m]
    }
    return name
}
console.log(reverseIterate("mirror"))