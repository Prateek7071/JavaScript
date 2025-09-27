class Father {
    constructor(surname){
        this.surname = surname
    }

    logMe(){
        return `The username is ${this.surname}`
    }
}

class Son extends Father{
    constructor(name,surname,age,balance){
        super(surname),
        this.name = name,
        this.age = age,
        this.balance = balance
    }

    detail(){
        return `${this.name} ${this.surname} of age ${this.age} has ${this.balance}`
    }
}

const friend1 = new Son("robert",'downey', '41','25000')
const friend2 = new Father('downey')

console.log(friend1.detail());
console.log(friend1.logMe());
console.log(friend1 === friend2);

console.log(Son instanceof Father); // This returns false BECAUSE instanceof checks if an 'object' is an instance of 
// a class, not if a class extends another class.
//friend1 instanceof Father would return true because friend1 is an object created from

console.log(friend1 instanceof Father);
console.log(friend2 instanceof Son);



