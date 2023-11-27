export default class Queue <T> {
    protected dataStore : T []
    constructor () {
        this.dataStore = []
    }

    enqueue(element : T) {
        this.dataStore.push(element);
    }

    dequeue() {
        return this.dataStore.shift();
    }

    front() : T {
        return this.dataStore[0];
    }

    back() : T {
        return this.dataStore[this.dataStore.length - 1];
    }

    toString() : string {
        return this.dataStore.toString();
    }
    count() :number {
        return this.dataStore.length;
    }

    isEmpty() : boolean {
        if (this.dataStore.length == 0) {
            return true;
        }
        else {
            return false;
        }
    }
}