//CALLBACKS
// setTimeout(()=>{
//     console.log("3")
//     setTimeout(()=>{
//         console.log("2")
//         setTimeout(()=>{
//             console.log("1")
//         },1000)
//     },1000)
// },1000)


//PROMISES
// let myPromise = new Promise((resolve,reject)=>{
//     let num = Math.floor(Math.random() * 2)
//     if(num === 0) {
//         resolve()
//     }
//     else{
//         reject()
//     }
//     console.log(num)
// })
// myPromise
// .then(()=>{console.log("resolved")})
// .catch(()=>{console.log("error")})
// console.log(myPromise)

let funct = async()=>{
    let response = await fetch("https://jsonplaceholder.typicode.com/posts")
    // .then((response)=>{response.json()})
    // .then((data)=>{console.log(data)})
    let data = await response.json()
    console.log(data)
}
funct()