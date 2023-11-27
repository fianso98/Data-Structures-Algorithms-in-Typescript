"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultipleBaseConversionStack = void 0;
const stack_1 = __importDefault(require("../../stack"));
const exemple_base_1 = require("../exemple-base");
class MultipleBaseConversionStack extends exemple_base_1.ExempleBase {
    static run() {
        console.log(32 + " converted to base " + 2 + " is " + this.convert(32, 2));
        console.log(125 + " converted to base " + 8 + " is " + this.convert(125, 8));
    }
    static convert(numb, base) {
        const stack = new stack_1.default();
        while (numb > 0) {
            stack.push(numb % base);
            numb = Math.floor(numb /= base);
        }
        let converted = "";
        while (stack.length() > 0) {
            converted += stack.pop();
        }
        return converted;
    }
}
exports.MultipleBaseConversionStack = MultipleBaseConversionStack;
