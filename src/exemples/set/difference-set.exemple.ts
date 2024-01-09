import Set from "../../set";
import { ExempleBase } from "../exemple-base"

export abstract class DifferenceSetExemple extends ExempleBase {
    static run() {
        let cis = new Set();
        let it = new Set();
        cis.add("Clayton");
        cis.add("Jennifer");
        cis.add("Danny");
        it.add("Bryan");
        it.add("Clayton");
        it.add("Jennifer");
        let diff = new Set();
        diff = cis.difference(it);
        console.log("[" + cis.display() + "] difference [" + it.display()
        + "] -> [" + diff.display() + "]");
    }
}