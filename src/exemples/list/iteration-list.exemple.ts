import List from "../../list";
import { ExempleBase } from "../exemple-base";
export abstract class IterationListExemple extends ExempleBase{
    static run(){
        try{
            console.log('\x1b[33m Lists :  \x1b[0m');            
            console.log('\x1b[33m ------- Part 2 -------  \x1b[0m');
            let names = new List<string>();
            names.append("Clayton");
            names.append("Raymond");
            names.append("Cynthia");
            names.append("Jennifer");
            names.append("Bryan");
            names.append("Danny");
            console.log(names.getElement());
            names.next();
            console.log(names.getElement());
            names.next();
            console.log(names.getElement());
            names.next();
            console.log(names.getElement());
            names.front();
            console.log(names.getElement());
            names.end();
            console.log(names.getElement());
            names.prev();
            console.log(names.getElement());
            names.moveTo(3);
            console.log(names.getElement());
            names.moveTo(-1);
            console.log(names.getElement());
            
            while(names.hasNext()){
                console.log(names.getElement());
                names.next();
            }
            console.log(names.getElement());
        } catch(error) {
            console.error(error);
        }    
    }
}
