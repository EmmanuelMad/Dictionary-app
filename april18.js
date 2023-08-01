let arr = [7, 10, 6, 1, 3]
//let arr = [1,3,5,7,9]
function isSorted(arr) {
    for(let i = 0; i <= arr.length - 1; i++) {
        if(arr[i] > arr[i+1]) {
            return false
        }
    }
    return true
}

//console.log(isSorted(arr))

function shuffle(arr) {
    let arrayLength = arr.length
    let randomIndex
    let temp
    while(arrayLength > 0) {
        randomIndex = Math.floor(Math.random() * arrayLength)
        arrayLength -= 1
        temp = arr[arrayLength]
        arr[arrayLength] = arr[randomIndex]
        arr[randomIndex] = temp
    }
    return arr
}
//sconsole.log(shuffle(arr))

function bogoSort(arr) {
    while(!isSorted(arr)) {
        //console.log(arr)
        shuffle(arr)
    }
    return arr
}
let sortedArr = bogoSort(arr)
//console.log(sortedArr)

function binarySearch(sortedArr,num) {
    let start = 0
    let end = sortedArr.length - 1
    for(let j = start; j <= end; j++) {
        let mid = Math.floor((start + end)/2)
        if(num == sortedArr[mid]) {
            return "found"
        }
        if(num > sortedArr[mid]) {
            start = mid + 1
        }
        else{
            end = mid - 1
        }
    }
    return "not found"
}
let num = 6
console.log(binarySearch(sortedArr,num))

