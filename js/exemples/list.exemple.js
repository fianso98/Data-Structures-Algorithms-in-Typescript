"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListExemple = void 0;
const list_1 = __importDefault(require("../list"));
class ListExemple {
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
            // names.moveTo(-1);
            // console.log(names.getElement());
            while (names.hasNext()) {
                console.log(names.getElement());
                names.next();
            }
            console.log(names.getElement());
            console.log('\x1b[33m ------- Part 3 -------  \x1b[0m');
            const listCollection = new list_1.default();
            listCollection.append('toufa');
            listCollection.append('sofiane');
            listCollection.append('moh');
            console.log(listCollection.appendIf('aoro', (element) => element > listCollection.getBiggestElement()));
            console.log(listCollection.appendIf('tzrokay', (element) => element > listCollection.getBiggestElement()));
            console.log(listCollection.appendIf('zoro', (element) => element > listCollection.getBiggestElement()));
            console.log(listCollection.appendIf('coro', (element) => element < listCollection.getSmallestElement()));
            console.log(listCollection.appendIf('azrokay', (element) => element < listCollection.getSmallestElement()));
            console.log(listCollection.appendIf('boro', (element) => element < listCollection.getSmallestElement()));
            console.log(listCollection.toString());
        }
        catch (error) {
            console.error(error);
        }
    }
}
exports.ListExemple = ListExemple;
