import Set from "../../set";
import { ExempleBase } from "../exemple-base"

export abstract class IntersectSetExemple extends ExempleBase {
    static run() {
        let cis = new Set();
        cis.add("Mike");
        cis.add("Clayton");
        cis.add("Jennifer");
        cis.add("Raymond");
        let dmp = new Set();
        dmp.add("Raymond");
        dmp.add("Cynthia");
        dmp.add("Bryan");
        let inter = cis.intersect(dmp);
        console.log(inter.display());
    }

}