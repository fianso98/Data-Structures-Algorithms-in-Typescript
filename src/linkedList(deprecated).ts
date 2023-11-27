

class NodeClass {
    protected element : string;
    protected next : NodeClass | null;
    constructor(element : string) {
        this.element = element;
        this.next = null;
    }

    getElement() : string{
        return this.element
    }

    getNext() : NodeClass | null{
        return this.next
    }

    setNext(node : NodeClass | null) {
        this.next = node
    }
}
/**
 * @deprecated
 */
export class LinkedList {
    protected head : NodeClass;
    constructor(){
        this.head = new NodeClass("head");
    }

    find(element : string) : NodeClass | null{
        let currentNode : NodeClass | null = this.head;
        
        while (currentNode?.getElement() !== element) {
            currentNode = currentNode ? currentNode.getNext() : null;
        }
        return currentNode;
    }

    findPrevious(element : string) : NodeClass | null{
        let currentNode : NodeClass | null = this.head;
        
        while (currentNode?.getNext()?.getElement() !== element) {
            currentNode = currentNode?.getNext() ?? null;
        }
        return currentNode;
    }

    insert(newElement : string, element: string ){

        const nodeToInsertAfter = this.find(element);
        if(nodeToInsertAfter === null) throw new Error("element to insert after it not found")
        
        const newNode = new NodeClass(newElement);
        newNode.setNext(nodeToInsertAfter.getNext());
        nodeToInsertAfter.setNext(newNode);
    }

    remove(element : string){
        let previousNode = this.findPrevious(element);
        if(previousNode?.getNext() !== null) {
            let nextNode = previousNode?.getNext()?.getNext() ?? null;
            previousNode?.setNext(nextNode);

        }
    }

    display() {
        let current : NodeClass | null = this.head
        while(current?.getNext() !== null){
            current = current ? current.getNext() : null;
            console.log(current?.getElement());
        }
    }
}


class DNodeClass {
    protected element : string;
    protected next : DNodeClass | null;
    protected previous : DNodeClass | null;

    constructor(element : string) {
        this.element = element;
        this.next = null;
        this.previous = null;
    }

    getElement() : string{
        return this.element
    }

    getNext() : DNodeClass | null{
        return this.next
    }

    setNext(node : DNodeClass | null) {
        this.next = node
    }

    getPrevious() : DNodeClass | null{
        return this.previous;
    }

    setPrevious(node : DNodeClass | null){
        this.previous = node
    }
}
/**
 * @deprecated
 */
export class DLinkedList {
    protected head : DNodeClass;
    constructor(){
        this.head = new DNodeClass("head");
    }

    insert(newElement: string, element: string): void {
        let newNode = new DNodeClass(newElement);
        let currentNode = this.find(element);
        if (currentNode) {
            newNode.setNext(currentNode.getNext());
            newNode.setPrevious(currentNode);
            currentNode.setNext(newNode);
        }
    }
    
    find(element : string) : DNodeClass | null{
        let currentNode : DNodeClass | null = this.head;
        
        while (currentNode?.getElement() !== element) {
            currentNode = currentNode ? currentNode.getNext() : null;
        }
        return currentNode;
    }

    remove(element: string): void {
        let node = this.find(element);
        if (node) {
            let previousNode = node.getPrevious();
            let nextNode = node.getNext()

            previousNode?.setNext(nextNode);
            nextNode?.setPrevious(previousNode);

            node.setNext(null)
            node.setPrevious(null)
        }
    }

    findLast() {
        let currNode : DNodeClass|null = this.head;
        while (currNode?.getNext() !== null) {
            currNode = currNode?.getNext() ?? null;
        }
        return currNode;
    }

    display() {
        let current : DNodeClass | null = this.head
        while(current?.getNext() !== null){
            current = current?.getNext() ?? null;
            console.log(current?.getElement());
        }
    }

    dispReverse() {
        let currNode : DNodeClass | null = this.findLast();
        while (currNode?.getPrevious() !== null) {
            console.log(currNode?.getElement());
            currNode = currNode?.getPrevious() ?? null;
        }
    }
}