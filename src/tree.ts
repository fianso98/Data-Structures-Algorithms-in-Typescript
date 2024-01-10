//BST Binary Search Tree
export default class Tree {
    private root : ClassNode<number> | null = null;
    constructor(){
        
    }
    getRoot() :ClassNode<number> | null {
        return this.root;
    } 
    insert(data: number) {
        const node = new ClassNode<number>(data);
        
        if(this.root === null) {
            this.root = node;
            return;
        }
        let currentNode : ClassNode<number> | null = this.root;
        let parent: ClassNode<number> | null = null;
        while (currentNode !== null) {
            parent = currentNode;

            if (data < currentNode.show()) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }

        if (parent !== null) {
            if (data < parent.show()) {
                parent.left = node;
            } else {
                parent.right = node;
            }
        }
    }

    inOrder(node  : ClassNode<number> | null = this.root){
        if(node !== null){
            this.inOrder(node.left);
            console.log(node.show() + " ");
            this.inOrder(node.right);
        }
    }

    preOrder(node : ClassNode<number> | null = this.root) {
        if (node !== null) {
            console.log(node.show() + " ");
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }

    postOrder(node : ClassNode<number> | null = this.root) {
        if (node !== null) {
            this.postOrder(node.left);
            this.postOrder(node.right);
            console.log(node.show() + " ");
        }
    }

    getMin(): ClassNode<number> | null {
        let currentNode = this.root;
        
        while(currentNode?.left){
            currentNode = currentNode.left
        }
        return currentNode;
    }

    getMax(): ClassNode<number> | null {
        let currentNode = this.root;
        
        while(currentNode?.right){
            currentNode = currentNode.right
        }
        return currentNode;
    }

    find(value : number) : ClassNode<number> | null {
        let currentNode = this.root;
        let result = null;
        while(currentNode){
            if(value === currentNode?.show()){
                result = currentNode;
                break;
            } else if (value < currentNode?.show()) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }
        return result;
    }
}

class ClassNode<T> {
    public left : ClassNode<T> | null = null;
    public right: ClassNode<T> | null = null;
    private data: T;
    constructor(data : T) {
        this.data = data;
    }

    show() : T {
        return this.data;
    }
}