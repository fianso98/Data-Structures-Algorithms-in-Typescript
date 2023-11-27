"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Stack {
    constructor() {
        this.dataStore = [];
        this.top = 0;
    }
    push(element) {
        this.dataStore.push(element);
        this.top++;
    }
    pop() {
        this.top--;
        return this.dataStore.pop();
    }
    peek() {
        return this.dataStore[this.top - 1];
    }
    length() {
        return this.top;
    }
    clear() {
        this.dataStore = [];
        this.top = 0;
    }
}
exports.default = Stack;
