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
        newData.next = this.head
        this.head = newData
        this.size++
    }

    insertLast(data){
        let newData = new Node(data)
        let current = this.head
        while(current.next != null) {
            current = current.next
        }
        this.size++
        current = newData
    }

    insertAt(data,index){
        let newData = new Node(data)
        let current = this.head
        let count = 0
        let previous = null
        while(count < index){
            previous = current
            current = current.next
            count++
        }
        previous.next = newData
        newData.next = current
        this.size++
    }
}

let list = new LinkedList
list.insertFirst(40)
list.insertLast(30)
list.insertAt(34,1)
console.log(list)