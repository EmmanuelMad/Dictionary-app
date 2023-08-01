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
        while (current.next != null) {
            current = current.next
        }
        current = newData
        this.size++
    }

    insertAt(data,index){
        // edge case
        if (index < 0 || index > this.size) {
            return
        }
        // edge case
        if (index === 0) {
            this.insertFirst(data)
            return
        }
        let newData = new Node(data)
        let current = this.head
        let previous = null
        let count = 0
        while (count < index) {
            previous = current
            count++
            current = current.next
        }
        previous.next = newData
        newData.next = current
        this.size++
    }
}

let list = new LinkedList()
list.insertFirst(10)
list.insertFirst(20)
list.insertFirst(30)
list.insertLast(5000)
list.insertLast(6000)
list.insertAt(4000,-1)
console.log(list)

/*
LINKED LIST DATA STRUCTURE
==========================
NODES
HEAD =>[data,nextPointer]=> [data,nextPointer]=> [data,nextPointer]=> [data,nextPointer]=> null TAIL

[data,nextPointer]=> null TAIL
HEAD


		previous current
newNode=>	newNode	 newNode   =>	null
15		20	 10		
HEAD
		\      /	
		[4000]
			
^
|
		
[4000]

*/