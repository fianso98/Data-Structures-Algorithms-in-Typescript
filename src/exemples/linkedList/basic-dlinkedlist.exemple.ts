import { DLinkedList } from "../../linkedList(deprecated)";
import { ExempleBase } from "../exemple-base";

export abstract class BasicDLinkedListExemple extends ExempleBase{
    static run(){
        const cities = new DLinkedList();
        cities.insert("Conway", "head");
        cities.insert("Russellville", "Conway");
        cities.insert("Carlisle", "Russellville");
        cities.insert("Alma", "Carlisle");
        cities.display();
        console.log("\n");
        cities.remove("Carlisle");
        cities.display();
        console.log("\n");
        cities.dispReverse();
    }
}