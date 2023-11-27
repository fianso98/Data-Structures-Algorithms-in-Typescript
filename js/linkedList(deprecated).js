"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DLinkedList = exports.LinkedList = void 0;
class NodeClass {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
    getElement() {
        return this.element;
    }
    getNext() {
        return this.next;
    }
    setNext(node) {
        this.next = node;
    }
}
/**
 * @deprecated
 */
class LinkedList {
    constructor() {
        this.head = new NodeClass("head");
    }
    find(element) {
        let currentNode = this.head;
        while ((currentNode === null || currentNode === void 0 ? void 0 : currentNode.getElement()) !== element) {
            currentNode = currentNode ? currentNode.getNext() : null;
        }
        return currentNode;
    }
    findPrevious(element) {
        var _a, _b;
        let currentNode = this.head;
        while (((_a = currentNode === null || currentNode === void 0 ? void 0 : currentNode.getNext()) === null || _a === void 0 ? void 0 : _a.getElement()) !== element) {
            currentNode = (_b = currentNode === null || currentNode === void 0 ? void 0 : currentNode.getNext()) !== null && _b !== void 0 ? _b : null;
        }
        return currentNode;
    }
    insert(newElement, element) {
        const nodeToInsertAfter = this.find(element);
        if (nodeToInsertAfter === null)
            throw new Error("element to insert after it not found");
        const newNode = new NodeClass(newElement);
        newNode.setNext(nodeToInsertAfter.getNext());
        nodeToInsertAfter.setNext(newNode);
    }
    remove(element) {
        var _a, _b;
        let previousNode = this.findPrevious(element);
        if ((previousNode === null || previousNode === void 0 ? void 0 : previousNode.getNext()) !== null) {
            let nextNode = (_b = (_a = previousNode === null || previousNode === void 0 ? void 0 : previousNode.getNext()) === null || _a === void 0 ? void 0 : _a.getNext()) !== null && _b !== void 0 ? _b : null;
            previousNode === null || previousNode === void 0 ? void 0 : previousNode.setNext(nextNode);
        }
    }
    display() {
        let current = this.head;
        while ((current === null || current === void 0 ? void 0 : current.getNext()) !== null) {
            current = current ? current.getNext() : null;
            console.log(current === null || current === void 0 ? void 0 : current.getElement());
        }
    }
}
exports.LinkedList = LinkedList;
class DNodeClass {
    constructor(element) {
        this.element = element;
        this.next = null;
        this.previous = null;
    }
    getElement() {
        return this.element;
    }
    getNext() {
        return this.next;
    }
    setNext(node) {
        this.next = node;
    }
    getPrevious() {
        return this.previous;
    }
    setPrevious(node) {
        this.previous = node;
    }
}
/**
 * @deprecated
 */
class DLinkedList {
    constructor() {
        this.head = new DNodeClass("head");
    }
    insert(newElement, element) {
        let newNode = new DNodeClass(newElement);
        let currentNode = this.find(element);
        if (currentNode) {
            newNode.setNext(currentNode.getNext());
            newNode.setPrevious(currentNode);
            currentNode.setNext(newNode);
        }
    }
    find(element) {
        let currentNode = this.head;
        while ((currentNode === null || currentNode === void 0 ? void 0 : currentNode.getElement()) !== element) {
            currentNode = currentNode ? currentNode.getNext() : null;
        }
        return currentNode;
    }
    remove(element) {
        let node = this.find(element);
        if (node) {
            let previousNode = node.getPrevious();
            let nextNode = node.getNext();
            previousNode === null || previousNode === void 0 ? void 0 : previousNode.setNext(nextNode);
            nextNode === null || nextNode === void 0 ? void 0 : nextNode.setPrevious(previousNode);
            node.setNext(null);
            node.setPrevious(null);
        }
    }
    findLast() {
        var _a;
        let currNode = this.head;
        while ((currNode === null || currNode === void 0 ? void 0 : currNode.getNext()) !== null) {
            currNode = (_a = currNode === null || currNode === void 0 ? void 0 : currNode.getNext()) !== null && _a !== void 0 ? _a : null;
        }
        return currNode;
    }
    display() {
        var _a;
        let current = this.head;
        while ((current === null || current === void 0 ? void 0 : current.getNext()) !== null) {
            current = (_a = current === null || current === void 0 ? void 0 : current.getNext()) !== null && _a !== void 0 ? _a : null;
            console.log(current === null || current === void 0 ? void 0 : current.getElement());
        }
    }
    dispReverse() {
        var _a;
        let currNode = this.findLast();
        while ((currNode === null || currNode === void 0 ? void 0 : currNode.getPrevious()) !== null) {
            console.log(currNode === null || currNode === void 0 ? void 0 : currNode.getElement());
            currNode = (_a = currNode === null || currNode === void 0 ? void 0 : currNode.getPrevious()) !== null && _a !== void 0 ? _a : null;
        }
    }
}
exports.DLinkedList = DLinkedList;
