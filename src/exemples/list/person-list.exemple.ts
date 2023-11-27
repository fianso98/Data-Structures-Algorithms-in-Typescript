import List from "../../list";
import { ExempleBase } from "../exemple-base";

export abstract class personListExemple extends ExempleBase{
    static run() {
        const list = new List<Person>();
        list.append(new Person('Sofiane', GENDER.MALE));
        list.append(new Person('Lotfi', GENDER.MALE));
        list.append(new Person('Djamila', GENDER.FEMALE));
        list.append(new Person('Fouzia', GENDER.FEMALE));
        list.append(new Person('Rachida', GENDER.FEMALE));
        list.append(new Person('Atika', GENDER.FEMALE));
        list.append(new Person('Azzeddine', GENDER.MALE));
        list.append(new Person('Hassen', GENDER.MALE));
        list.append(new Person('Zoubir', GENDER.MALE));
        list.append(new Person('Morad', GENDER.MALE));
        
        const malePersonList = list.filter((element) => element.getGender() === GENDER.MALE);
        const femalePersonList = list.filter((element) => element.getGender() === GENDER.FEMALE);
        console.log(" ------- All List -------");
        list.foreach((element) => console.log(element.getName()))
        console.log(" ------- MALE -------");
        malePersonList.foreach((element) => console.log(element.getName()))  
        console.log(" ------- FEMALE -------");
        femalePersonList.foreach((element) => console.log(element.getName())) 
        
    }
}

function createListOfSameGender(list : List<Person>, gender : GENDER ) : List<Person> {
    const listOfSameGender = new List<Person>();

    list.front();    
    do{
        let element = list.getElement();
        if(element.getGender() === gender) {
            listOfSameGender.append(element);
        }
        list.next();

    }while(list.hasNext())

    let element = list.getElement();
    if(element.getGender() === gender) {
        listOfSameGender.append(element);
    }
    
    return listOfSameGender;
}

class Person {
    private name : string;
    private gender : GENDER;

    constructor(name : string, gender : GENDER) {
        this.name = name;
        this.gender = gender
    }

    getGender() : GENDER {
        return this.gender;
    }

    getName() : string {
        return this.name;
    }
}

enum GENDER {
    MALE = "male",
    FEMALE = "female"
}