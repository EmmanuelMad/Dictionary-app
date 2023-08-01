// function deleteItem(arr, position) {
//     for(let i = position; i < arr.length; i++) {
//         arr[i] = arr[i+1]
//     }
//     arr.length = arr.length - 1
//     return arr
// }

// console.log(deleteItem([1, 2, 3, 4, 5], 1))


// function insertItem(arr, position, num) {
//     for(let j = arr.length - 1; j >= position; j--) {
//         arr[j+1] = arr[j]
//     }
//     arr[position] = num
//     return arr
// }
// console.log(insertItem([1, 2, 3, 4, 5], 3, 20))

// NEXTED LOOPS
for(let i = 0; i <= 3; i++){
    console.log(i)
    for(let j = 1; j <= 5; j++){
        console.log(j)
    }
}