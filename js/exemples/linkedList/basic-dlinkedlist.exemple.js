"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicDLinkedListExemple = void 0;
const linkedList_deprecated_1 = require("../../linkedList(deprecated)");
const exemple_base_1 = require("../exemple-base");
class BasicDLinkedListExemple extends exemple_base_1.ExempleBase {
    static run() {
        const cities = new linkedList_deprecated_1.DLinkedList();
        cities.insert("Conway", "head");
        cities.insert("Russellville", "Conway");
        cities.insert("Carlisle", "Russellville");
        cities.insert("Alma", "Carlisle");
        cities.display();
        console.log("\n");
        cities.remove("Carlisle");
        cities.display();
        console.log("\n");
        cities.dispReverse();
    }
}
exports.BasicDLinkedListExemple = BasicDLinkedListExemple;
