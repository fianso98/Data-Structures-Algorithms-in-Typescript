"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DequeQueueExemple = void 0;
const queue_1 = __importDefault(require("../../queue"));
const exemple_base_1 = require("../exemple-base");
class DequeQueueExemple extends exemple_base_1.ExempleBase {
    static run() {
        const deque = new Deque();
        this.insertWordIntoDeque(deque, 'radar');
        console.log(this.checkIfPalindrome(deque));
        const deque2 = new Deque();
        this.insertWordIntoDeque(deque2, 'not');
        console.log(this.checkIfPalindrome(deque2));
        const deque3 = new Deque();
        this.insertWordIntoDeque(deque3, 'rotor');
        console.log(this.checkIfPalindrome(deque3));
        const deque4 = new Deque();
        this.insertWordIntoDeque(deque4, 'ressasser');
        console.log(this.checkIfPalindrome(deque4));
    }
    static insertWordIntoDeque(deque, word) {
        const wordLength = word.length;
        for (let i = 0; i < wordLength; i++) {
            deque.enqueue(word[i]);
        }
    }
    static checkIfPalindrome(deque) {
        while (deque.count() > 1) {
            if (deque.dequeue() !== deque.dequeueLast())
                return false;
        }
        return true;
    }
}
exports.DequeQueueExemple = DequeQueueExemple;
class Deque extends queue_1.default {
    enqueueFirst(element) {
        this.dataStore.unshift(element);
    }
    dequeueLast() {
        return this.dataStore.pop();
    }
}
