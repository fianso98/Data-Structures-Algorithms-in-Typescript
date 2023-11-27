import List from "../../list";
import { ExempleBase } from "../exemple-base";
export abstract class InsertOnlyIfListExemple extends ExempleBase{
    static run(){
        try{
            console.log('\x1b[33m Lists :  \x1b[0m');
            console.log('\x1b[33m ------- Part 3 -------  \x1b[0m');
            const list = new List<string>();
            list.append('toufa');
            list.append('sofiane');
            list.append('moh');

            console.log(list.appendIf('aoro', (element) => element > list.getBiggestElement()));
            console.log(list.appendIf('tzrokay', (element) => element > list.getBiggestElement()));            
            console.log(list.appendIf('zoro', (element) => element > list.getBiggestElement()));

            console.log(list.appendIf('coro', (element) => element < list.getSmallestElement()));
            console.log(list.appendIf('azrokay', (element) => element < list.getSmallestElement()));            
            console.log(list.appendIf('boro', (element) => element < list.getSmallestElement()));            
            console.log(list.toString());
        } catch(error) {
            console.error(error);
        }    
    }
}
