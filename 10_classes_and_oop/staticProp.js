// Static Properties

class Father {
    constructor(surname){
        this.surname = surname
    }

    logMe(){
        return `The username is ${this.surname}`
    }

    static createChild(){
        return `A new child is created`
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

const friend1 = new Son("Dork","Massive",'52',5000)
const friend2 = new Father("Massive")

console.log(friend2.createChild()); //this return error as static restricts access
console.log(friend1.createChild());

// here createChild is accessed by class not by object, as sometimes we need to deny access to certain methods or properties to objects
// example creating new users or new posts etc.

console.log(Father.createChild()); // this will work just fine
