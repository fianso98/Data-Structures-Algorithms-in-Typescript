import Queue from "../../queue";
import { ExempleBase } from "../exemple-base";

export abstract class RadixSortQueueExemple extends ExempleBase{
    static run() {
        const bin0 = new Queue<number>();
        const bin1 = new Queue<number>();
        const bin2 = new Queue<number>();
        const bin3 = new Queue<number>();
        const bin4 = new Queue<number>();
        const bin5 = new Queue<number>();
        const bin6 = new Queue<number>();
        const bin7 = new Queue<number>();
        const bin8 = new Queue<number>();
        const bin9 = new Queue<number>();
        const queues = [bin0, bin1, bin2, bin3, bin4, bin5, bin6, bin7, bin8, bin9];
        const nums = [91, 46, 85, 15, 92, 35, 31, 22];
        this.distribute(nums, queues, 1);
        const firstIterationOrder = this.collect(queues);
        console.log(firstIterationOrder);
        this.distribute(firstIterationOrder, queues, 2);
        const orderedNumber = this.collect(queues);
        console.log(orderedNumber);
    }

    static distribute(nums : number[], queues : Queue<number>[], iteration : 1 | 2){
        const length = nums.length;
        for(let i = 0; i < length; i++){
            if (iteration === 1) {
                queues[nums[i] % 10].enqueue(nums[i])
            }
            else {
                queues[Math.floor(nums[i] / 10)].enqueue(nums[i])
            }
        }  
    }

    static collect(queues : Queue<number>[]) : number [] {
        let newNumberArray : number[] = [];
        for(let i = 0; i < 10; i++){
            while(!queues[i].isEmpty()){
                let num = queues[i].dequeue()
                num ? newNumberArray.push(num) : null
            }            
        }
        return newNumberArray;
    }
}