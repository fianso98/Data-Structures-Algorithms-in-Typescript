"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicListExemple = void 0;
const list_1 = __importDefault(require("../list"));
class BasicListExemple {
    static run() {
        try {
            console.log('\x1b[33m Lists :  \x1b[0m');
            console.log('\x1b[33m ------- Part 1 -------  \x1b[0m');
            const list = new list_1.default();
            list.append(3);
            list.append(6);
            list.append(9);
            console.log('length', list.length());
            console.log('element of array :', list.toString());
            console.log('remove element 3', list.remove(6));
            console.log('length', list.length());
            console.log('element of array', list.toString());
            console.log('remove element 4', list.remove(4));
            console.log('length', list.length());
            console.log('element of array', list.toString());
            list.clear();
            console.log('element of array', list.toString());
        }
        catch (error) {
            console.error(error);
        }
    }
}
exports.BasicListExemple = BasicListExemple;
