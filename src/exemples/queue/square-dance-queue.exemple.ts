import Queue from "../../queue";
import { ExempleBase } from "../exemple-base"
import * as fs from 'fs';



export abstract class SquareDanceQueueExemple extends ExempleBase{
    
    static run() {    
        const femaleQueue = new Queue<Dancer>();    
        const maleQueue = new Queue<Dancer>();    
        this.getDancers(femaleQueue, maleQueue);
        this.dancePartners(femaleQueue, maleQueue);
        if (maleQueue.count() > 0) {
            console.log("There are " + maleQueue.count() + " male dancers waiting to dance.");
        }
        if (femaleQueue.count() > 0) {
            console.log("There are " + femaleQueue.count() + " female dancers waiting to dance.");
        }

    }

    static dancePartners(femaleQueue : Queue<Dancer>, maleQueue : Queue<Dancer>){
        console.log("The dance partners are: \n");
        while (!femaleQueue.isEmpty() && !maleQueue.isEmpty()) {
            const female = femaleQueue.dequeue();
            console.log("Female dancer is: " + female?.name);
            const male = maleQueue.dequeue();
            console.log(" and the male dancer is: " + male?.name);
            console.log("\n");
        }
    }

    static getDancers(femaleQueue : Queue<Dancer>, maleQueue : Queue<Dancer>) {
        
        const file = fs.readFileSync('./src/exemples/queue/dancers.txt', 'utf-8');
        const lines = file.split('\n');

        for (const line of lines) {
            let dancerLine = line.split(' ');        
            let dancer = new Dancer(dancerLine[1]+ ' ' + dancerLine[2], this.getSexe(dancerLine[0]));
            
            if(dancer.sexe === SEXE.FEMALE) {
                femaleQueue.enqueue(dancer);
            }

            if(dancer.sexe === SEXE.MALE) {
                maleQueue.enqueue(dancer);
            }            
        }        
    }

    static getSexe(sexe : string) : SEXE {
        return sexe === SEXE.MALE ? SEXE.MALE : SEXE.FEMALE;
    }
}

class Dancer {
    constructor(public name : string, public sexe : SEXE) {

    }
}

enum SEXE {
    MALE = "M",
    FEMALE = "F"
}