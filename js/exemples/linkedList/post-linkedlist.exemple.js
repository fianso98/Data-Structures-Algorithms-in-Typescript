"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostLinkedListExemple = void 0;
const exemple_base_1 = require("../exemple-base");
const linkedList_1 = __importDefault(require("../../linkedList"));
class PostLinkedListExemple extends exemple_base_1.ExempleBase {
    static run() {
        const linkedList = new linkedList_1.default();
        let linkedListArray = linkedList.traverse(); // [];
        console.log(linkedListArray);
        linkedList.insertAtEnd({ title: "Post A" });
        linkedList.insertAtEnd({ title: "Post B" });
        linkedList.insertInBegin({ title: "Post C" });
        linkedList.insertInBegin({ title: "Post D" });
        linkedListArray = linkedList.traverse(); // [{ title : "Post D" }, { title : "Post C" }, { title : "Post A" }, { title : "Post B" }];
        console.log(linkedListArray);
        const searchResult = linkedList.search(({ title }) => title === "Post A"); // Node { data: { title: "Post A" }, prev: Node, next: Node};
        console.log(searchResult);
        if (searchResult) {
            linkedList.deleteNode(searchResult);
        }
        linkedListArray = linkedList.traverse(); // [{ title : "Post D" }, { title : "Post C" }, { title : "Post B" }];
        console.log(linkedListArray);
    }
}
exports.PostLinkedListExemple = PostLinkedListExemple;
