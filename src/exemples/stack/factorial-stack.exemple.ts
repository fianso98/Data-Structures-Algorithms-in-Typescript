import Stack from "../../stack";
import { ExempleBase } from "../exemple-base";

export abstract class FactorialStackExemple extends ExempleBase{
    static run() {
        console.log(this.factorial(5));

    }
    static factorial(num : number) : number {
        const stack = new Stack<number>();
        while(num > 0) {
            stack.push(num);
            num--;
        }
        let factorial = 1;
        while(stack.length() > 0) {
            let s = stack.pop() ?? 1;
           factorial *= s; 
        }
        return factorial

    }
}