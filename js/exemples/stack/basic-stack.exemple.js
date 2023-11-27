"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicStackExemple = void 0;
const stack_1 = __importDefault(require("../../stack"));
const exemple_base_1 = require("../exemple-base");
class BasicStackExemple extends exemple_base_1.ExempleBase {
    static run() {
        const s = new stack_1.default();
        s.push("David");
        s.push("Raymond");
        s.push("Bryan");
        console.log("length: " + s.length());
        console.log(s.peek());
        const popped = s.pop();
        console.log("The popped element is: " + popped);
        console.log(s.peek());
        s.push("Cynthia");
        console.log(s.peek());
        s.clear();
        console.log("length: " + s.length());
        console.log(s.peek());
        s.push("Clayton");
        console.log(s.peek());
    }
}
exports.BasicStackExemple = BasicStackExemple;
