"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClassNode {
    constructor(element) {
        this.element = element;
        this.next = null;
        this.prev = null;
    }
    getElement() {
        return this.element;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    insertInBegin(element) {
        const node = new ClassNode(element);
        if (!this.head) {
            this.head = node;
        }
        else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        return node;
    }
    insertAtEnd(element) {
        const node = new ClassNode(element);
        if (!this.head) {
            this.head = node;
        }
        else {
            let lastNode = this.getLast();
            lastNode.next = node;
            node.prev = lastNode;
        }
        return node;
    }
    getLast() {
        var _a;
        let currentNode = this.head;
        while ((currentNode === null || currentNode === void 0 ? void 0 : currentNode.next) !== null) {
            currentNode = (_a = currentNode === null || currentNode === void 0 ? void 0 : currentNode.next) !== null && _a !== void 0 ? _a : null;
        }
        return currentNode;
    }
    deleteNode(node) {
        if (!node.prev) {
            this.head = node.next;
        }
        else {
            const prevNode = node.prev;
            prevNode.next = node.next;
        }
    }
    traverse() {
        const array = new Array();
        if (!this.head) {
            return array;
        }
        const addToArray = (node) => {
            array.push(node.getElement());
            return node.next ? addToArray(node.next) : array;
        };
        return addToArray(this.head);
    }
    size() {
        return this.traverse().length;
    }
    search(comparator) {
        let currentNode = this.head;
        let searchResult = null;
        while (currentNode && currentNode.next !== null) {
            if (comparator(currentNode.getElement())) {
                searchResult = currentNode;
                break;
            }
            currentNode = currentNode.next;
        }
        return searchResult;
    }
}
exports.default = LinkedList;
