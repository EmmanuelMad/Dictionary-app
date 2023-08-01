// QUEUE... FIFO
// STACK ... LIFO LAST IN FIRST OUT
// RECURSION ... that calls itself

// function addNums(num) {
//     // BASE CASE
//     if (num < 1) {
//         return 0
//     }
    
//     return addNums(num - 1) + num
//                     //5 - 1 => 4 + num
//                     //4 - 1 => 3 + num
//                     //3 - 1 => 2 + num
//                     //2 - 1 => 1 + num
//                     //1 - 1 => 0 + num
//                     //0 - 1 => -1 + num
//                     //-1 - 1 => -2 + num
// }
// console.log(addNums(5))

function reverse_string(str) {
    if (str.length < 1) {
        return ""
    }
    
    return reverse_string(str.slice(1)) + str[0]
}

// lagos
// sogal

// lagos
// agos
// gos
// os
// s

// STACK

// S     //S O G A L
// O
// G
// A
// L
console.log(reverse_string('LAGOS'))