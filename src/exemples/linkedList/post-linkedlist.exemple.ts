import { ExempleBase } from "../exemple-base";
import LinkedList from "../../linkedList";

export abstract class PostLinkedListExemple extends ExempleBase{
    static run(){
        interface Post {
            title: string;
        }
        const linkedList = new LinkedList<Post>();
        
        let linkedListArray = linkedList.traverse() // [];
        console.log(linkedListArray); 
        
        linkedList.insertAtEnd({ title: "Post A" });
        linkedList.insertAtEnd({ title: "Post B" });
        linkedList.insertInBegin({ title: "Post C" });
        linkedList.insertInBegin({ title: "Post D" });
        
        linkedListArray = linkedList.traverse() // [{ title : "Post D" }, { title : "Post C" }, { title : "Post A" }, { title : "Post B" }];
        console.log(linkedListArray); 

        const searchResult = linkedList.search(({ title }) => title === "Post A") // Node { data: { title: "Post A" }, prev: Node, next: Node};
        console.log(searchResult);
        if(searchResult){
            linkedList.deleteNode(searchResult);
        } 

        linkedListArray = linkedList.traverse() // [{ title : "Post D" }, { title : "Post C" }, { title : "Post B" }];
        console.log(linkedListArray); 
    }
}