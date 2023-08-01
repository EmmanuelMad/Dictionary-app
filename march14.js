// function add_numbers(num) {
//     let sum = 0
// }
function sumItems(){
    let sum = 0
    for(let i = 0; i <= 6; i++){
        sum = sum + i
    }
    return sum;
}
let begin = performance.now()
let answer = sumItems()
console.log("The answer is ",answer)
let end = performance.now()
let commonDif = end - begin
console.log("The common difference is ",commonDif)


function addValues(x){
    let result = x *( x+1)/2
    return result
}
let start = performance.now()
console.log(addValues(6))
let stop = performance.now()
console.log('time differene: ',stop - start)

// Write about:
// time complexity
// space complexity
// block  or local scoping in programming
// global scoping in programming


// let arr = [10,50,45,243]
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[3])