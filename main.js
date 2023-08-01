// SELECTION SORTING ALGORITHM

// PSEUDOCODE ****
// Find the minimum index 

// create an empty array
// push items based on their order of sorted indices

function min_index(arr) {
    let index = 0; // 3 = > 10
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[index]) { // 30 < 10
            index = i // index = 3
        }
    } // exit or stop
    return index
}

function selection_sort(arr) {
    let list = []
    while (arr.length > 0) { // <==
        let min = min_index(arr) /// splice(index, number of items) 50 // position 0
        let removed_element =  arr.splice(min,1)[0] // arr.splice(0,1)  // 50
        list.push(removed_element) //[10,20,30,40,50]
        // [20,40,50,10,30] 
        // [20,40,50,30]  // 20 = > 0
        // [40,50,30] 
        // [40,50] 
        // [50] 
        // [] 
    } // EXIT OR STOP
    return list;
}

let arr = [20,40,50,10,30]
console.log(selection_sort(arr))