const title = document.querySelector(".title");
const restart_btn = document.querySelector(".restart")
const gameBoard = document.querySelector(".gameBoard")
const html_boxes = document.querySelectorAll('.box') // NODELIST
const boxes = Array.from(html_boxes) // CONVERTS NODELISTS INTO JS ARRAYS
const X_TEXT = "X"
const O_TEXT = "O"
let current_player = X_TEXT
let box_array = [null,null,null,null,null,null,null,null,null]
                //    0   1    2    3    4    5    6    7    8 
function drawLines(){
    boxes.forEach((box,index)=>{
        let line = ""
        if (index < 3) {
            line += `border-bottom: 3px solid red;`
        }
        if (index % 3 === 0) {
            line += `border-right: 3px solid red;`
        }
        if (index % 3 === 2) {
            line += `border-left: 3px solid red;`
        }
        if (index > 5) {
            line += `border-top: 3px solid red;`
        }
        box.style = line
        box.addEventListener("click", playGame)
    })
}
drawLines()
console.log(box_array)
function playGame(event) {
    let id = event.target.id
    if (!box_array[id]) {
        box_array[id] = current_player
        event.target.textContent = current_player
    }
    console.log(box_array)
    if (hasWon(current_player)) {
        title.textContent = `PLAYER ${current_player} WON`
    }
    current_player = current_player == X_TEXT ? O_TEXT : X_TEXT
    /**
     * if(current_player == x){
     *    current_play = O
     * }else{
     *   current_player =X
     * }
     * 
     */
}

function hasWon(player) {
    if (box_array[0] === player) {
        if (box_array[1] === player && box_array[2] === player) {
            console.log(`Player ${player} has won up-top`)
            return true
        }
        if (box_array[3] === player && box_array[6] === player) {
            console.log(`player ${player} has won left-wards`)
            return true
        }
        if (box_array[4] === player && box_array[8] === player) {
            console.log(`player ${player} has won diagonally right`)
            return true
        }
    }

    if (box_array[1] === player) {
        if (box_array[4] === player && box_array[7] === player) {
            console.log(`player ${player} has won through the center`)
            return true
        }
    }

    if (box_array[2] === player) {
        if (box_array[5] === player && box_array[8] === player) {
            console.log(`player ${player} has won right-wards`)
            return true
        }
        if (box_array[4] === player && box_array[6] === player) {
            console.log(`player ${player} has won diagonally left`)
            return true
        }
    }

    if (box_array[3] === player) {
        if (box_array[4] === player && box_array[5] === player) {
            console.log(`player ${player} has won through the middle`)
            return true
        }
    }

    if (box_array[6] === player) {
        if (box_array[7] === player && box_array[8] === player) {
            console.log(`player ${player} has won down-low`)
            return true
        }
    }
}

restart_btn.addEventListener("click", function () {
    box_array.forEach((box,index)=>{
        box_array[index] = null
    })
    boxes.forEach((box,index)=>{
        box.textContent = ""
    })
    title.textContent = "LET'S PLAY AGAIN"
})