"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinSortQueueExemple = void 0;
const queue_1 = __importDefault(require("../../queue"));
const exemple_base_1 = require("../exemple-base");
class BinSortQueueExemple extends exemple_base_1.ExempleBase {
    static run() {
        const bin0 = new queue_1.default();
        const bin1 = new queue_1.default();
        const bin2 = new queue_1.default();
        const bin3 = new queue_1.default();
        const bin4 = new queue_1.default();
        const bin5 = new queue_1.default();
        const bin6 = new queue_1.default();
        const bin7 = new queue_1.default();
        const bin8 = new queue_1.default();
        const bin9 = new queue_1.default();
        const queues = [bin0, bin1, bin2, bin3, bin4, bin5, bin6, bin7, bin8, bin9];
        const nums = [91, 46, 85, 15, 92, 35, 31, 22];
        this.distribute(nums, queues, 1);
        const firstIterationOrder = this.collect(queues);
        console.log(firstIterationOrder);
        this.distribute(firstIterationOrder, queues, 2);
        const orderedNumber = this.collect(queues);
        console.log(orderedNumber);
    }
    static distribute(nums, queues, iteration) {
        const length = nums.length;
        for (let i = 0; i < length; i++) {
            if (iteration === 1) {
                queues[nums[i] % 10].enqueue(nums[i]);
            }
            else {
                queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);
            }
        }
    }
    static collect(queues) {
        let newNumberArray = [];
        for (let i = 0; i < 10; i++) {
            while (!queues[i].isEmpty()) {
                let num = queues[i].dequeue();
                num ? newNumberArray.push(num) : null;
            }
        }
        return newNumberArray;
    }
}
exports.BinSortQueueExemple = BinSortQueueExemple;
