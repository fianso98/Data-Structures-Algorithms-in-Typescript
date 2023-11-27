import { ExempleBase } from "../exemple-base";
import Queue from '../../queue';

export abstract class PriorityQueueExemple extends ExempleBase{
    static run(){
        const p = new Patient("Smith",3);
        const ed = new PatientQueuePriority();
        ed.enqueue(p);
        const p2 = new Patient("Jones", 4);
        ed.enqueue(p2);
        const p3 = new Patient("Fehrenbach", 6);
        ed.enqueue(p3);
        const p4 = new Patient("Brown", 1);
        ed.enqueue(p4);
        const p5 = new Patient("Ingram", 1);
        ed.enqueue(p5);
        console.log(ed.toString());
        let seen = ed.dequeue();
        console.log("Patient being treated: " + seen?.name);
        console.log("Patients waiting to be seen: ")
        console.log(ed.toString());
        // another round
        seen = ed.dequeue();
        console.log("Patient being treated: " + seen?.name);
        console.log("Patients waiting to be seen: ")
        console.log(ed.toString());
        // another round
        seen = ed.dequeue();
        console.log("Patient being treated: " + seen?.name);
        console.log("Patients waiting to be seen: ")
        console.log(ed.toString());
        // another round
        seen = ed.dequeue();
        console.log("Patient being treated: " + seen?.name);
        console.log("Patients waiting to be seen: ")
        console.log(ed.toString());
    }
}

class Patient {    
    constructor(public name : string, public code : number) {
    }
}

class PatientQueuePriority extends Queue<Patient> {
    dequeue(): Patient | undefined {
        const queueLength = this.count();
        let highestPriorityPatient = this.dataStore[0];
        let highestPriorityIndex = 0;
        for(let i = 1; i < queueLength; i++) {
            if(this.dataStore[i].code > highestPriorityPatient.code) {
                highestPriorityPatient = this.dataStore[i]
                highestPriorityIndex = i
            }
        }
        this.dataStore.splice(highestPriorityIndex, 1);
        return highestPriorityPatient;        
    }
    toString(): string {
        var retStr = "";
        for (var i = 0; i < this.dataStore.length; ++i) {
            retStr += this.dataStore[i].name + " code: "
            + this.dataStore[i].code + "\n";
        }
        return retStr;
    }
}