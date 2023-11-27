import Queue from "../../queue";
import { ExempleBase } from "../exemple-base";

export abstract class DequeQueueExemple extends ExempleBase{
    static run(){
        const deque = new Deque<string>();
        this.insertWordIntoDeque(deque, 'radar');
        console.log(this.checkIfPalindrome(deque));

        const deque2 = new Deque<string>();
        this.insertWordIntoDeque(deque2, 'not');
        console.log(this.checkIfPalindrome(deque2));

        const deque3 = new Deque<string>();
        this.insertWordIntoDeque(deque3, 'rotor');
        console.log(this.checkIfPalindrome(deque3));
        

        const deque4 = new Deque<string>();
        this.insertWordIntoDeque(deque4, 'ressasser');
        console.log(this.checkIfPalindrome(deque4));
        

    }
    static insertWordIntoDeque(deque : Deque<string>, word : string) : void {
        const wordLength = word.length;
        for(let i = 0; i < wordLength; i++){
            deque.enqueue(word[i]);
        }
    }

    static checkIfPalindrome(deque : Deque<string>) : boolean {
        while(deque.count() > 1) { 
            if(deque.dequeue() !== deque.dequeueLast()) return false;
        }
        return true;
    }
}



class Deque<T> extends Queue<T>{
    enqueueFirst(element: T): void {        
        this.dataStore.unshift(element);
    }

    dequeueLast(): T | undefined {
        return this.dataStore.pop();
    }
}