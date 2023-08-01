function binarySearch(arr,target,left,right) {
    if (right < left) {
        return false
    }
    let mid = Math.floor((left + right)/2)
    if (arr[mid] == target) {
        return true
    }
    if (arr[mid] < target) {
        return binarySearch(arr,target,mid+1,right)
    }
    else {
        return binarySearch(arr,target,left,mid-1)
    }
}
let arr = [20,400,60,180,100]
let target = 10
let left = 0
let right = arr.length - 1

console.log(binarySearch(arr,target,left,right))


function quickSort(arr) {
    if(arr.length < 1) {
      return arr  
    }
    let chosen = arr[0]
    let leftArr = []
    let rightArr = []

    for(i = 1; i < arr.length; i++) {
        if(arr[i] < chosen) {
            leftArr.push(arr[i])
        }
        else{
            rightArr.push(arr[i])
        }
    }
    return quickSort(leftArr).concat(chosen,quickSort(rightArr))
}
console.log(quickSort(arr))

function merge_sort(arr) {
    // base case
    let mid = Math.floor(ar.length/2);
    let left_arr = merge_sort(arr.slice(0,mid))
    let right_arr = merge_sort(arr(mid))
    let sorted_arr = []
    let left_idx = 0
    let right_idx = 0

    while (left_idx < left_arr.length && right_idx < right_arr.length) {
        if (left_arr[left_idx] < right_arr[right_idx]) {
            sorted_arr.push(left_arr[left_idx])
        }
    }
}