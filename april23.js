// function addNums(arr) {
//     if(arr.length < 1) {
//         return 0
//     }
//     return arr[0] + addNums(arr.slice(1))
//     //      5 + 10 + 15 + 20 + 25 + 0
//     //      5      +  10    + 15  + 20  + 25  + 0 
//     //      0     +  25    + 20  + 15  + 10  + 5

// }

// let arr = [5,10,15,20,25] // arr[0] + addNum(arr.slice)
// console.log(addNums(arr)) 

// //  M A D A Mf
// //  M A D Z M
// function pallindrome(str) {
//     // base case
//     if (str.length < 2) {
//         return true
//     }
//     if (str[0] === str[str.length - 1]) {
//         return pallindrome(str.slice(1,str.length - 1))
//     }
//     return false
// }
// console.log(pallindrome('madam'))


function toBinary(num) {
    if(num <= 0) {
        return ""
    }
    return toBinary(Math.floor(num/2)) + num%2
    // 0 , ""  ""1110
    // 1 , 1 
    // 3 , 1 
    // 7 , 1 
    //     0 
}
console.log(toBinary(14))