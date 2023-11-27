import Queue from "../../queue";
import { ExempleBase } from "../exemple-base";

export abstract class BasicQueueExemple extends ExempleBase{
    static run() {
        const q = new Queue<string>();
        q.enqueue("Meredith");
        q.enqueue("Cynthia");
        q.enqueue("Jennifer");
        console.log(q.toString());
        q.dequeue();
        console.log(q.toString());
        console.log("Front of queue: " + q.front());
        console.log("Back of queue: " + q.back());
    }
} 