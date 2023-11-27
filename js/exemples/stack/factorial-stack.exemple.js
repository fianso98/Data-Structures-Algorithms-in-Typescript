"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactorialStackExemple = void 0;
const stack_1 = __importDefault(require("../../stack"));
const exemple_base_1 = require("../exemple-base");
class FactorialStackExemple extends exemple_base_1.ExempleBase {
    static run() {
        console.log(this.factorial(5));
    }
    static factorial(num) {
        var _a;
        const stack = new stack_1.default();
        while (num > 0) {
            stack.push(num);
            num--;
        }
        let factorial = 1;
        while (stack.length() > 0) {
            let s = (_a = stack.pop()) !== null && _a !== void 0 ? _a : 1;
            factorial *= s;
        }
        return factorial;
    }
}
exports.FactorialStackExemple = FactorialStackExemple;
