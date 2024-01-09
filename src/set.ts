export default class Set<T>{
    private dataStore: Array<T>;
    constructor(){
        this.dataStore = [];
    }

    add(data : T): boolean{
        if(this.dataStore.includes(data)){
            return false
        } else {
            this.dataStore.push(data);
            return true;
        }
    }
    remove(data : T): boolean{
        if(this.dataStore.includes(data)){
            this.dataStore = this.dataStore.filter((val) => val !== data)
            return true;
        } else {
            return false;
        }
    }

    size() : number {
        return this.dataStore.length;
    }

    display(): string {
        return this.dataStore.toString();
    }

    toArray(): Array<T> {
        return this.dataStore;
    }

    conatins(data: T): boolean {
        return this.dataStore.includes(data);
    }

    union(set : Set<T>): Set<T>{
        const newSet = new Set<T>();
        const setToArray = set.toArray();

        this.dataStore.forEach((value : T) => newSet.add(value));
        setToArray.forEach((value : T) => {
            if(!newSet.conatins(value)) newSet.add(value)
        });
        return newSet;
    }

    intersect(set: Set<T>) {
        const newSet = new Set<T>();
        this.dataStore.forEach((value : T) => {
            if(set.conatins(value)) newSet.add(value)
        });
        return newSet;
    }

    subset(set: Set<T>): boolean{
        if(this.size() > set.size()) {
            return false;
        }

        for(let value of this.dataStore){
            if(!set.conatins(value)){
                return false;
            }
        }
        return true;
    }

    difference(set: Set<T>): Set<T> {
        const newSet = new Set<T>();
        const filteredSet = this.dataStore.filter((value) => !set.conatins(value))
        for(let value of filteredSet){
            newSet.add(value);
        }
        return newSet;
    }

}