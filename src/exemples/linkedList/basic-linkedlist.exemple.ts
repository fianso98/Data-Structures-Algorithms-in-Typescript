import { LinkedList } from "../../linkedList(deprecated)";
import { ExempleBase } from "../exemple-base";

export abstract class BasicLinkedListExemple extends ExempleBase{
    static run(){
        const linkedList = new LinkedList();
        linkedList.insert('okey', 'head');
        linkedList.insert('is', 'okey');
        linkedList.insert('this', 'okey');
        linkedList.insert('cool', 'is');
        linkedList.display();
        console.log("\n");

        const cities = new LinkedList();
        cities.insert("Conway", "head");
        cities.insert("Russellville", "Conway");
        cities.insert("Carlisle", "Russellville");
        cities.insert("Alma", "Carlisle");
        cities.display();
        console.log("\n");
        cities.remove("Carlisle");
        cities.display();
    }
}