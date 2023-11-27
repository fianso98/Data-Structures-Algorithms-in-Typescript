"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicLinkedListExemple = void 0;
const linkedList_deprecated_1 = require("../../linkedList(deprecated)");
const exemple_base_1 = require("../exemple-base");
class BasicLinkedListExemple extends exemple_base_1.ExempleBase {
    static run() {
        const linkedList = new linkedList_deprecated_1.LinkedList();
        linkedList.insert('okey', 'head');
        linkedList.insert('is', 'okey');
        linkedList.insert('this', 'okey');
        linkedList.insert('cool', 'is');
        linkedList.display();
        console.log("\n");
        const cities = new linkedList_deprecated_1.LinkedList();
        cities.insert("Conway", "head");
        cities.insert("Russellville", "Conway");
        cities.insert("Carlisle", "Russellville");
        cities.insert("Alma", "Carlisle");
        cities.display();
        console.log("\n");
        cities.remove("Carlisle");
        cities.display();
    }
}
exports.BasicLinkedListExemple = BasicLinkedListExemple;
