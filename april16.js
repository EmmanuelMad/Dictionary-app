// function binarySearch(arr,target) {
//     let start = 0
//     let end = arr.length - 1
//     while (start <= end) {
//         let mid = Math.floor((start + end) / 2)
//         if (arr[mid] == target) {
//             return "found"
//         }
//         if (arr[mid] < target) {
//             start = mid + 1
//         }else {
//             end = mid - 1
//         }
//     }
//     return "not found"
// }
// let arr = [10,20,30,40,50,60,70,80,90];
// let target = 110;
// console.log(binarySearch(arr,target));

function isSorted(arr) {
    for (i = 0; i <= arr.length - 1; i++) {
        if (arr[i] > arr[i+1]) {
            return false
        }
    }
    return true
}
// let arr = [20,10,50,70]
// console.log(isSorted(arr))

function swap(arr) {
    // if(arr[0] > arr[1]) {
    temp = arr[0]
    arr[0] = arr[1]
    arr[1] = temp
    // }
    return arr
}
//let arr = [10,40]
//console.log(swap(arr))

function shuffle(arr) {
    let randomIndex
    let arrLength
    let temp
    arrLength = arr.length
    while (arrLength > 0) {
        randomIndex = Math.floor(Math.random() * arrLength)
        arrLength--
        temp = arr[arrLength]
        arr[arrLength] = arr[randomIndex]
        arr[randomIndex] = temp
    }
    return arr
}
let arr = [50,30,60,10,90]
//console.log(shuffle(arr))

function bogo_sort(arr) {
    while(!isSorted(arr)) {
        shuffle(arr)
    }
    return arr
}
console.log(bogo_sort(arr))