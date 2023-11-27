"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SquareDanceQueueExemple = void 0;
const queue_1 = __importDefault(require("../../queue"));
const exemple_base_1 = require("../exemple-base");
const fs = __importStar(require("fs"));
class SquareDanceQueueExemple extends exemple_base_1.ExempleBase {
    static run() {
        const femaleQueue = new queue_1.default();
        const maleQueue = new queue_1.default();
        this.getDancers(femaleQueue, maleQueue);
        this.dancePartners(femaleQueue, maleQueue);
        if (maleQueue.count() > 0) {
            console.log("There are " + maleQueue.count() + " male dancers waiting to dance.");
        }
        if (femaleQueue.count() > 0) {
            console.log("There are " + femaleQueue.count() + " female dancers waiting to dance.");
        }
    }
    static dancePartners(femaleQueue, maleQueue) {
        console.log("The dance partners are: \n");
        while (!femaleQueue.isEmpty() && !maleQueue.isEmpty()) {
            const female = femaleQueue.dequeue();
            console.log("Female dancer is: " + (female === null || female === void 0 ? void 0 : female.name));
            const male = maleQueue.dequeue();
            console.log(" and the male dancer is: " + (male === null || male === void 0 ? void 0 : male.name));
            console.log("\n");
        }
    }
    static getDancers(femaleQueue, maleQueue) {
        const file = fs.readFileSync('./src/exemples/queue/dancers.txt', 'utf-8');
        const lines = file.split('\n');
        for (const line of lines) {
            let dancerLine = line.split(' ');
            let dancer = new Dancer(dancerLine[1] + ' ' + dancerLine[2], this.getSexe(dancerLine[0]));
            if (dancer.sexe === SEXE.FEMALE) {
                femaleQueue.enqueue(dancer);
            }
            if (dancer.sexe === SEXE.MALE) {
                maleQueue.enqueue(dancer);
            }
        }
    }
    static getSexe(sexe) {
        return sexe === SEXE.MALE ? SEXE.MALE : SEXE.FEMALE;
    }
}
exports.SquareDanceQueueExemple = SquareDanceQueueExemple;
class Dancer {
    constructor(name, sexe) {
        this.name = name;
        this.sexe = sexe;
    }
}
var SEXE;
(function (SEXE) {
    SEXE["MALE"] = "M";
    SEXE["FEMALE"] = "F";
})(SEXE || (SEXE = {}));
