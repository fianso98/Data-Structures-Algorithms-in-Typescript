"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.personListExemple = void 0;
const list_1 = __importDefault(require("../../list"));
const exemple_base_1 = require("../exemple-base");
class personListExemple extends exemple_base_1.ExempleBase {
    static run() {
        const list = new list_1.default();
        list.append(new Person('Sofiane', GENDER.MALE));
        list.append(new Person('Lotfi', GENDER.MALE));
        list.append(new Person('Djamila', GENDER.FEMALE));
        list.append(new Person('Fouzia', GENDER.FEMALE));
        list.append(new Person('Rachida', GENDER.FEMALE));
        list.append(new Person('Atika', GENDER.FEMALE));
        list.append(new Person('Azzeddine', GENDER.MALE));
        list.append(new Person('Hassen', GENDER.MALE));
        list.append(new Person('Zoubir', GENDER.MALE));
        list.append(new Person('Morad', GENDER.MALE));
        const malePersonList = list.filter((element) => element.getGender() === GENDER.MALE);
        const femalePersonList = list.filter((element) => element.getGender() === GENDER.FEMALE);
        console.log(" ------- All List -------");
        list.foreach((element) => console.log(element.getName()));
        console.log(" ------- MALE -------");
        malePersonList.foreach((element) => console.log(element.getName()));
        console.log(" ------- FEMALE -------");
        femalePersonList.foreach((element) => console.log(element.getName()));
    }
}
exports.personListExemple = personListExemple;
function createListOfSameGender(list, gender) {
    const listOfSameGender = new list_1.default();
    list.front();
    do {
        let element = list.getElement();
        if (element.getGender() === gender) {
            listOfSameGender.append(element);
        }
        list.next();
    } while (list.hasNext());
    let element = list.getElement();
    if (element.getGender() === gender) {
        listOfSameGender.append(element);
    }
    return listOfSameGender;
}
class Person {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
    getGender() {
        return this.gender;
    }
    getName() {
        return this.name;
    }
}
var GENDER;
(function (GENDER) {
    GENDER["MALE"] = "male";
    GENDER["FEMALE"] = "female";
})(GENDER || (GENDER = {}));
