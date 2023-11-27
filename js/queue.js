"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Queue {
    constructor() {
        this.dataStore = [];
    }
    enqueue(element) {
        this.dataStore.push(element);
    }
    dequeue() {
        return this.dataStore.shift();
    }
    front() {
        return this.dataStore[0];
    }
    back() {
        return this.dataStore[this.dataStore.length - 1];
    }
    toString() {
        return this.dataStore.toString();
    }
    count() {
        return this.dataStore.length;
    }
    isEmpty() {
        if (this.dataStore.length == 0) {
            return true;
        }
        else {
            return false;
        }
    }
}
exports.default = Queue;
