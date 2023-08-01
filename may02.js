class Node{
    constructor(data,next = null){
        this.data = data
        this.next = next
    }
}


class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    insertFirst(data){
        let newData = new Node(data,this.head)
        this.head = newData
        this.size++
    }

    insertLast(data){
        let newData = new Node(data)
        let current = this.head
        while(current.next !=null){
            current = current.next
        }
        current = newData
        this.size++
    }
}
let list = new LinkedList()
list.insertFirst(100)
list.insertFirst(13)
list.insertFirst(60)
list.insertLast(400)
list.insertLast(80)
console.log(list)