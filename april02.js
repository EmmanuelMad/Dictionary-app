// INSERT
// let arr = [10,20,30,40,50]
// arr.push(5000)
// arr.unshift(5000)
// arr.pop()
// arr.shift()
// console.log(arr)

function insertValue(arr, position, num) {
    // EDGE CASE
    if(position < 0 || position > arr.length - 1){
        return "position " + position +" is out of range";
    }

    for(let i= arr.length - 1; i >= position; i--){
        arr[i+1] = arr[i] // i = 1 = >arr[1+1] = arr[1+1] = arr[2] 30....... arr[i] => arr[1] => 20
    }
    arr[position] = num;
    return arr;
}
            // x,10,20,30,40,50
// let arr = [10,20,30,40,50]
// let position = 300
// let num = 5000
// console.log(insertValue(arr,position,num ))

// 0 ......x..... 10
// x < 10
// 10 ......x..... 0
// x > 10
// 1,2,3,4,5,6
//i > 2


// DELETE
function deleteValue(arr, position) {
    for (let i = position; i < arr.length - 1; i++) {
        arr[i] = arr[i+1]
    }
    arr.length -= 1
    // arr.length = arr.length - 1
    return arr
    
}   
            // [20,30,40,50] remove 10
              0,0+1
        //    10,20,30,40,50] remove 30
let arr = [10,20,30,40,50]
let position = 3
console.log(deleteValue(arr,position))
