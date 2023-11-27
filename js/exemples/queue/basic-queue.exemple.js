"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicQueueExemple = void 0;
const queue_1 = __importDefault(require("../../queue"));
const exemple_base_1 = require("../exemple-base");
class BasicQueueExemple extends exemple_base_1.ExempleBase {
    static run() {
        const q = new queue_1.default();
        q.enqueue("Meredith");
        q.enqueue("Cynthia");
        q.enqueue("Jennifer");
        console.log(q.toString());
        q.dequeue();
        console.log(q.toString());
        console.log("Front of queue: " + q.front());
        console.log("Back of queue: " + q.back());
    }
}
exports.BasicQueueExemple = BasicQueueExemple;
