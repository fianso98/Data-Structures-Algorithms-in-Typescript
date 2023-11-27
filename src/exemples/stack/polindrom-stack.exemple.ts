import Stack from "../../stack";
import { ExempleBase } from "../exemple-base";

export abstract class PolindromStackExemple extends ExempleBase{
    static run() {
        console.log(this.isPolindrom("racecar"));
        console.log(this.isPolindrom("not"));
    }
    static isPolindrom(word : string) : boolean {
        const stack = new Stack<string>();
        for(let i = 0; i < word.length; i++) {
            stack.push(word[i]);
        }
        let reversedWord = "";
        while(stack.length() > 0){
           reversedWord += stack.pop();
        }
        return word === reversedWord;
    }
}