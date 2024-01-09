import Set from "../../set";
import { ExempleBase } from "../exemple-base"

export abstract class BasicSetExemple extends ExempleBase {
    static run() {
        let names = new Set<string>();
        names.add("David");
        names.add("Jennifer");
        names.add("Cynthia");
        names.add("Mike");
        names.add("Raymond");
        if (names.add("Mike")) {
            console.log("Mike added")
        }
        else {
            console.log("Can't add Mike, must already be in set");
        }
        console.log(names.display());
        var removed = "Mike";
        if (names.remove(removed)) {
            console.log(removed + " removed.");
        }
        else {
            console.log(removed + " not removed.");
        }
        console.log(names.display());
    }

}