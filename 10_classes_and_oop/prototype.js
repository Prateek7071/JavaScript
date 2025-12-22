const name = "Keetarp   "
// to find true length we can use (name.trim().length) but
console.log(name.length);

const myHero = ["thor", "spiderman", "ironman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    ironman: "brain",

    getSpiderPower: function(){
        console.log(`spider power is ${this.spiderman}`);
    }
}

Object.prototype.anyname = function(){
    console.log("Anyname is present in all objects!");
}
}

Array.prototype.anotherName = function(){
    console.log("Hey array you have been prototyped")
}

heroPower.anyname()
myHero.anotherName()


//  Inheritance

const User = {
    username: "Pronto",
    email: "dorrito@mail.com"
}

const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment :"JS Assignment",
    fullTime: true,

    __proto__ :TeachingSupport //this is the old outdated approach and we can also use it outside like
}

// TASupport.__proto__ = TeachingSupport

console.log(TASupport.isAvailable);

//modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher) //teaching support access all properties of teacher

console.log(TeachingSupport.makeVideo);

//lets inject a method into string

let anotherUsername = "Baloonie    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`The true length is ${this.trim().length}`);
}

anotherUsername.trueLength()
"Hello  World".trueLength()
"Whatever1414      ".trueLength()

//to remove white space between character
 let newWord = "Hello white spaces"
 console.log(newWord.replaceAll(" ","")); //method 1
 console.log(newWord.replace(/\s/g,"")); // method 2, where /s is white space and g is global occurance of all said white spaces, encapsulated between //
 
  
 