class ClassNode<T> {
    public next : ClassNode<T> | null = null;
    public prev: ClassNode<T> | null = null;
    constructor(protected element : T) {}

    getElement() : T {
        return this.element;
    }
}

interface ILinkedList<T> {
    insertInBegin(element: T): ClassNode<T>;
    insertAtEnd(element: T): ClassNode<T>;
    deleteNode(node: ClassNode<T>): void;
    traverse(): T[];
    size(): number;
    search(comparator: (element: T) => boolean): ClassNode<T> | null;
}

export default class LinkedList<T> implements ILinkedList<T>{
    protected head : ClassNode<T> | null = null;
    /**
     * @description insert an element into the start of the 
     * linked list
     * @param element - An element to insert
     * @returns 
     */
    insertInBegin(element: T): ClassNode<T> {
        const node = new ClassNode<T>(element);
        if (!this.head) {
            this.head = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }        
        return node;
    }

    insertAtEnd(element: T): ClassNode<T> {
        const node = new ClassNode<T>(element);
        if (!this.head) {
            this.head = node;
        } else {
            let lastNode = this.getLast();
            lastNode.next = node;
            node.prev = lastNode;
        }
        return node;
    }

    getLast(): ClassNode<T> {
        let currentNode = this.head;
        while(currentNode?.next !== null){
            currentNode = currentNode?.next ?? null;
        }
        return currentNode;
    }

    deleteNode(node: ClassNode<T>): void {
        if (!node.prev) {
            this.head = node.next;
        } else {
            const prevNode = node.prev;
            prevNode.next = node.next;
        }
    }

    traverse(): T[] {
        const array = new Array<T>();

        if(!this.head) {
            return array;
        }

        const addToArray = (node: ClassNode<T>): T[] => {
            array.push(node.getElement());
            return node.next ? addToArray(node.next) : array;
        };
        return addToArray(this.head);
    }

    size(): number {
        return this.traverse().length;
    }

    search(comparator: (element: T) => boolean): ClassNode<T> | null {
        let currentNode = this.head;
        let searchResult = null;

        while (currentNode && currentNode.next !== null) {
            if(comparator(currentNode.getElement())) {
                searchResult = currentNode;
                break;
            }
            currentNode = currentNode.next;
        }
        
        return searchResult;
    }
}