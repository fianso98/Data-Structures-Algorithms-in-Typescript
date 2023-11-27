"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolindromStackExemple = void 0;
const stack_1 = __importDefault(require("../../stack"));
const exemple_base_1 = require("../exemple-base");
class PolindromStackExemple extends exemple_base_1.ExempleBase {
    static run() {
        console.log(this.isPolindrom("racecar"));
        console.log(this.isPolindrom("not"));
    }
    static isPolindrom(word) {
        const stack = new stack_1.default();
        for (let i = 0; i < word.length; i++) {
            stack.push(word[i]);
        }
        let reversedWord = "";
        while (stack.length() > 0) {
            reversedWord += stack.pop();
        }
        return word === reversedWord;
    }
}
exports.PolindromStackExemple = PolindromStackExemple;
