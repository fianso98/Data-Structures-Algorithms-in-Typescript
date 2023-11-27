import Stack from "../../stack";
import { ExempleBase } from "../exemple-base";

export abstract class MultipleBaseConversionStack extends ExempleBase {
    static run(){
        
        console.log(32 + " converted to base " + 2 + " is " + this.convert(32,2));
        console.log(125 + " converted to base " + 8 + " is " + this.convert(125,8));
        
    }

    static convert(numb : number, base : number) : string {
        const stack = new Stack<number>();
        while(numb > 0){
            stack.push(numb % base);
            numb = Math.floor(numb /= base); 
        }
        let converted = "";
        while(stack.length() > 0){
            converted += stack.pop();
        }
        return converted;
    }
}