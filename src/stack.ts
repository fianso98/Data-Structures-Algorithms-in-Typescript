export default class Stack <T> {
    private dataStore : T[];
    private top : number;    
    constructor() {
        this.dataStore = [];
        this.top = 0;
    }

    push(element : T) {
        this.dataStore.push(element);
        this.top++;
    }

    pop() {
        this.top--;
        return this.dataStore.pop();
    }

    peek() : T {
        return this.dataStore[this.top - 1];
    }

    length() : number {
        return this.top;
    }

    clear() {
        this.dataStore = []
        this.top = 0
    }

}