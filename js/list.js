"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class List {
    constructor() {
        this.listSize = 0;
        this.position = 0;
        this.dataStore = [];
    }
    length() {
        return this.listSize;
    }
    append(element) {
        this.dataStore[this.listSize++] = element;
    }
    appendIf(element, condition) {
        if (condition(element)) {
            this.dataStore[this.listSize++] = element;
            return true;
        }
        return false;
    }
    getBiggestElement() {
        let max = this.dataStore[0];
        for (let i = 1; i < this.dataStore.length; i++) {
            if (this.dataStore[i] > max) {
                max = this.dataStore[i];
            }
        }
        return max;
    }
    getSmallestElement() {
        let min = this.dataStore[0];
        for (let i = 1; i < this.dataStore.length; i++) {
            if (this.dataStore[i] < min) {
                min = this.dataStore[i];
            }
        }
        return min;
    }
    insert(element, after) {
        const afterPosition = this.find(after);
        if (afterPosition > 0) {
            this.dataStore.splice(afterPosition + 1, 0, element);
            this.listSize++;
            return true;
        }
        return false;
    }
    contains(element) {
        const pos = this.find(element);
        if (pos > 0)
            return true;
        return false;
    }
    remove(element) {
        const elementPosition = this.find(element);
        if (elementPosition > -1) {
            this.dataStore.splice(elementPosition, 1);
            this.listSize--;
            return true;
        }
        return false;
    }
    /**
     * @description
     * returns position if element is found, else it return -1
     * @param element
     *
     */
    find(element) {
        for (let i = 0; i < this.dataStore.length; i++) {
            if (this.dataStore[i] === element) {
                return i;
            }
        }
        return -1;
    }
    foreach(callback) {
        for (let i = 0; i < this.dataStore.length; i++) {
            callback(this.dataStore[i]);
        }
    }
    filter(condition) {
        const filteredData = new List();
        for (let i = 0; i < this.dataStore.length; i++) {
            if (condition(this.dataStore[i])) {
                filteredData.append(this.dataStore[i]);
            }
        }
        return filteredData;
    }
    front() {
        this.position = 0;
    }
    end() {
        this.position = this.listSize - 1;
    }
    prev() {
        if (this.position > 0) {
            this.position--;
        }
    }
    next() {
        if (this.hasNext()) {
            this.position++;
        }
    }
    hasNext() {
        return this.position < this.listSize - 1;
    }
    currPos() {
        return this.position;
    }
    moveTo(position) {
        if (position < 0 || position > this.listSize - 1) {
            throw Error('position number wrong');
        }
        this.position = position;
    }
    getElement() {
        return this.dataStore[this.position];
    }
    clear() {
        this.dataStore = [];
        this.position = 0;
        this.listSize = 0;
    }
    toString() {
        return this.dataStore.toString();
    }
}
exports.default = List;
