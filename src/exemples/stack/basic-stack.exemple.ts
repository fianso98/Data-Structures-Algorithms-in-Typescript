import Stack from "../../stack";
import { ExempleBase } from "../exemple-base"

export abstract class BasicStackExemple extends ExempleBase {
    static run() {
        const s = new Stack<string>();
        s.push("David");
        s.push("Raymond");
        s.push("Bryan");
        console.log("length: " + s.length());
        console.log(s.peek());
        const popped = s.pop();
        console.log("The popped element is: " + popped);
        console.log(s.peek());
        s.push("Cynthia");
        console.log(s.peek());
        s.clear();
        console.log("length: " + s.length());
        console.log(s.peek());
        s.push("Clayton");
        console.log(s.peek());

    }

}