"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertOnlyIfListExemple = void 0;
const list_1 = __importDefault(require("../../list"));
const exemple_base_1 = require("../exemple-base");
class InsertOnlyIfListExemple extends exemple_base_1.ExempleBase {
    static run() {
        try {
            console.log('\x1b[33m Lists :  \x1b[0m');
            console.log('\x1b[33m ------- Part 3 -------  \x1b[0m');
            const list = new list_1.default();
            list.append('toufa');
            list.append('sofiane');
            list.append('moh');
            console.log(list.appendIf('aoro', (element) => element > list.getBiggestElement()));
            console.log(list.appendIf('tzrokay', (element) => element > list.getBiggestElement()));
            console.log(list.appendIf('zoro', (element) => element > list.getBiggestElement()));
            console.log(list.appendIf('coro', (element) => element < list.getSmallestElement()));
            console.log(list.appendIf('azrokay', (element) => element < list.getSmallestElement()));
            console.log(list.appendIf('boro', (element) => element < list.getSmallestElement()));
            console.log(list.toString());
        }
        catch (error) {
            console.error(error);
        }
    }
}
exports.InsertOnlyIfListExemple = InsertOnlyIfListExemple;
