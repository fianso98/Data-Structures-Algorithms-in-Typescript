import Set from "../../set";
import { ExempleBase } from "../exemple-base"

export abstract class SubSetExemple extends ExempleBase {
    static run() {
        let it = new Set();
        it.add("Cynthia");
        it.add("Clayton");
        it.add("Jennifer");
        it.add("Danny");
        it.add("Jonathan");
        it.add("Terrill");
        it.add("Raymond");
        it.add("Mike");
        var dmp = new Set();
        dmp.add("Cynthia");
        dmp.add("Raymond");
        dmp.add("Jonathan");
        // dmp.add("Shirley");
        if (dmp.subset(it)) {
            console.log("DMP is a subset of IT.");
        }
        else {
            console.log("DMP is not a subset of IT.");
        }
    }

}