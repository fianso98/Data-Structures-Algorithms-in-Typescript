"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IterationListExemple = void 0;
const list_1 = __importDefault(require("../../list"));
const exemple_base_1 = require("../exemple-base");
class IterationListExemple extends exemple_base_1.ExempleBase {
    static run() {
        try {
            console.log('\x1b[33m Lists :  \x1b[0m');
            console.log('\x1b[33m ------- Part 2 -------  \x1b[0m');
            let names = new list_1.default();
            names.append("Clayton");
            names.append("Raymond");
            names.append("Cynthia");
            names.append("Jennifer");
            names.append("Bryan");
            names.append("Danny");
            console.log(names.getElement());
            names.next();
            console.log(names.getElement());
            names.next();
            console.log(names.getElement());
            names.next();
            console.log(names.getElement());
            names.front();
            console.log(names.getElement());
            names.end();
            console.log(names.getElement());
            names.prev();
            console.log(names.getElement());
            names.moveTo(3);
            console.log(names.getElement());
            names.moveTo(-1);
            console.log(names.getElement());
            while (names.hasNext()) {
                console.log(names.getElement());
                names.next();
            }
            console.log(names.getElement());
        }
        catch (error) {
            console.error(error);
        }
    }
}
exports.IterationListExemple = IterationListExemple;
