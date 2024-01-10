import Tree from "../../tree";
import { ExempleBase } from "../exemple-base"

export abstract class BasicTreeExemple extends ExempleBase {
    static run() {
        var nums = new Tree();
        nums.insert(23);
        nums.insert(45);
        nums.insert(16);
        nums.insert(37);
        nums.insert(3);
        nums.insert(99);
        nums.insert(22);
        console.log("Inorder traversal: ");
        nums.inOrder();
        console.log("Preorder traversal: ");
        nums.preOrder();
        console.log("Postorder traversal: ");
        nums.postOrder();
        console.log("Minimum: "+ nums.getMin()?.show());
        console.log("Maximum: "+ nums.getMax()?.show());
        console.log("Search for value 3: "+ nums.find(3)?.show());
        console.log("Search for value 99: "+ nums.find(99)?.show());
        console.log("Search for value 37: "+ nums.find(37)?.show());
        console.log("Search for value 333: "+ nums.find(333)?.show());
        
    }
}