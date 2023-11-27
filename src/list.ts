export default class List <T>{
    private listSize : number;
    private position : number;
    private dataStore : T[];
    constructor(){
        this.listSize = 0
        this.position = 0
        this.dataStore = [];
    }

    length() : number {
        return this.listSize;
    }

    append (element : T) : void {
        this.dataStore[this.listSize++] = element;
    }
    
    appendIf (element : T, condition : (element : T) => boolean) : boolean {
        if(condition(element)){
            this.dataStore[this.listSize++] = element;
            return true;
        }
        return false;
    }

    getBiggestElement() : T {
        let max = this.dataStore[0];
        for(let i = 1; i < this.dataStore.length; i++){
            if(this.dataStore[i] > max){
                max = this.dataStore[i];
            }
        }
        return max;
    }

    getSmallestElement() : T {
        let min = this.dataStore[0];
        for(let i = 1; i < this.dataStore.length; i++){
            if(this.dataStore[i] < min){
                min = this.dataStore[i];
            }
        }
        return min;
    }

    insert (element: T, after : T): boolean {
        const afterPosition = this.find(after);
        if(afterPosition > 0) {
            this.dataStore.splice(afterPosition + 1, 0, element);
            this.listSize++;
            return true;
        }
        return false;
    }

    contains(element : T) : boolean {
        const pos = this.find(element);
        if(pos > 0) return true;
        return false;
    }
    
    remove(element : T) : boolean {
        const elementPosition = this.find(element);
        if (elementPosition > -1) {
            this.dataStore.splice(elementPosition, 1);
            this.listSize--;
            return true;
        }
        return false;
    }
    
    /**
     * @description 
     * returns position if element is found, else it return -1
     * @param element 
     * 
     */
    find(element : T) : number{
        for(let i = 0; i < this.dataStore.length; i++){
            if(this.dataStore[i] === element){
                return i;
            }
        }
        return -1;
    }

    foreach(callback : (element : T) => void) : void{
        for(let i = 0; i < this.dataStore.length; i++){
            callback(this.dataStore[i])
            
        }
    }

    filter(condition : (element : T) => boolean) : List<T>{
        const filteredData  : List<T> = new List<T>();
        for(let i = 0; i < this.dataStore.length; i++){
            if(condition(this.dataStore[i])) {
                filteredData.append(this.dataStore[i])
            }            
        }
        return filteredData;
    }

    front(){
        this.position = 0;
    }

    end() {
        this.position = this.listSize - 1;
    }

    prev() {
        if(this.position > 0) {
            this.position--;
        }
    }

    next() {
        if(this.hasNext()){
            this.position++;
        }
    }

    hasNext() : boolean {
        return this.position < this.listSize - 1;
    }

    currPos () : number {
        return this.position;
    }

    moveTo(position : number) {
        if(position < 0 || position > this.listSize - 1) {
            throw Error('position number wrong');
        }
        this.position = position;
    }

    getElement(){
        return this.dataStore[this.position];
    }

    clear() {
        this.dataStore = [];
        this.position = 0;
        this.listSize = 0;
    }

    toString() : string {
        return this.dataStore.toString();
    }
}