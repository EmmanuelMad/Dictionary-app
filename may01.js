function mergeSort(arr) {
    if(arr.length <= 1) {
        return arr
    }
    let mid = Math.floor(arr.length/2)
    let leftArr = mergeSort(arr.slice(0,mid))
    let rightArr = mergeSort(arr.slice(mid))
    let leftIdx = 0
    let rightIdx = 0
    let sortedArr = []

    while(leftIdx < leftArr.length && rightIdx < rightArr.length) {
        if(leftArr[leftIdx] < rightArr[rightIdx]) {
            sortedArr.push(leftArr[leftIdx])
            leftIdx++
        }
        else {
            sortedArr.push(rightArr[rightIdx])
            rightIdx++
        }
    }
    sortedArr = sortedArr.concat(leftArr.slice(leftIdx))
    sortedArr = sortedArr.concat(rightArr.slice(rightIdx))
    return sortedArr
}
let arr = [100,72,50,20,8,30]
//console.log(mergeSort(arr))


class Country{
    constructor(name, continent) {
        this.name = name
        this.continent = continent
    }
    static print_governing_body = ()=>{
        return "United Nations"
    }
}

let country1 = new Country("Nigeria", "Africa")
let country2 = new Country("Germany", "Europe")
console.log(Country.print_governing_body())