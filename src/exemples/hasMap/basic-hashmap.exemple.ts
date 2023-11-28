import { ExempleBase } from "../exemple-base";
import  HashMap  from "../../hashMap";

export abstract class BasicHashMapExemple extends ExempleBase{
    static run(){
        const hashMap = new HashMap();
        let someNames = [
            "David", "Jennifer", "Donnie", "Raymond",
            "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"
        ];
        for (let i = 0; i < someNames.length; ++i) {
            hashMap.put(i.toString(), someNames[i]);
        }
        hashMap.display();
        //**** */
        
        let numStudents = 10;
        let arrSize = 97;
        let idLen = 9;
        let students = new Array(numStudents);
        this.genStuData(students);
        console.log("Student data: \n");
        for (let i = 0; i < students.length; ++i) {
        console.log(students[i].substring(0,8) + " " +
        students[i].substring(9));
        }
        console.log("\n\nData distribution: \n");
        let hTable = new HashMap();
        for (let i = 0; i < students.length; ++i) {
        hTable.put(i.toString(), students[i]);
        }
        hTable.display();
        /** phone book */
        let phones = new HashMap();
        
        phones.put("AZZEDDINE", "0550674485");
        phones.put("SOFIANE", {"phone" : "0550674485"});
        console.log(phones.get("AZZEDDINE"));
        console.log(phones.get("SOFIANE"));


           
    }

    private static getRandomInt (min : number, max : number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    private static genStuData(arr : Array<string>) {
        for (let i = 0; i < arr.length; ++i) {
        let num = "";
        for (let j = 1; j <= 9; ++j) {
        num += Math.floor(Math.random() * 10);
        }
        num += this.getRandomInt(50,100);
        arr[i] = num;
        }
       }
}