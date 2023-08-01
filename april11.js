// oobjects

// { }

let myData = {
    name: "Emmanuel",
    language: "javascript",
    topic: "algorithms",
    likesSports: true,
    favNum: 7,
    friends: ['tony','casandra','joe']
}

// let result = myData.name;
// let result = myData.favNum;
// let result = myData["language"];
// let result = myData["friends"][2];
// let result = myData.friends[myData.friends.length - 2];
// let result = myData.friends.includes('tony');
// let result = myData.friends.includes('mike');
console.log(result)

// let result = Object.keys(myData)
// let result = Object.values(myData)
// console.log(result)

// let data = [
//     {
//         name: 'sam',
//         age: 15
//     },
//     {
//         name: 'terry',
//         age: 17
//     },
//     {
//         name: 'joe',
//         age: 12
//     },
//     {
//         name: 'alex',
//         age: 20
//     }
// ]

// for (i = 0; i <= data.length - 1; i++) {
//     console.log(data[i])
//     if (data[i].name == "terry") {
//         console.log(data[i].age)
//     }
// }

// let obj = {
//     fnum: 1,
//     snum: 2
// }
// obj.thirdNumber = 30
// obj["fourthNum"] = 27
// console.log(obj)

// BINARY SEARCH ALGORITHM


function binarySearch(arr,num) {
    let start = 0;
    let end = arr.length - 1
    let midPoint = Math.floor((start + end) / 2)
    // console.log(midPoint)
    if (arr[midPoint] === num) {
        return "found"
    }
    else if(arr[midPoint] < num){
        start = midPoint + 1
    }
    else{
        end = midPoint - 1
    }
    return "not found"
}
let arr = [10,20,30,40,50]
console.log(binarySearch(arr,10))

/*function binarySearch(arr,num) {
    let start = 0;
    let end = arr.length - 1
    while (start < end) {
        let mid = Math.floor((start + end)/2)
        if (arr[mid] === num) {
            return "found"
        }
        else if (arr[mid] < num) (
            start = mid + 1
        )
        else {
            end = mid - 1
        }
    }
    return "not found"
}*/
