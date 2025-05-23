// if an object is created with a constructor function, the object is singleton 
// else if we declare it as literals then it is not singleton

// Object.create(); //this is called using constructor function

// Object Literals
const ExObj = {} ; //another way to create an object (not a singleton) object //this curly braces is called object literal and its empty right now but can hold key value pairs

const mySym = Symbol("key1") //symbol
const correctsymbol = Symbol("key2") //symbol
const JsUser ={
    name: "John",
    "full name": "John Snow",
    mySym: "mykey1",
    [correctsymbol]: "mykey2", //symbol
    age: 30,
    location: "Jaipur",
    email:"something@mail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Tuesday"]
    
}

// ways to access the object
console.log(JsUser.email); 
console.log(JsUser["name"]);
console.log(JsUser["email"]); //better way because, see next example
console.log(JsUser["full name"]); 
console.log(typeof JsUser.mySym); //symbol but it is not being used as a key here even though output is symbol but it is not a symbol key
console.log(JsUser[mySym]); 
console.log(typeof(JsUser[mySym])); 
console.log(JsUser[correctsymbol]); //symbol
console.log(typeof JsUser[correctsymbol]); //symbol
//even though no change in value but symbol is defined like : [mysym]: "mykey1" correct way to use symbol.

console.log("-------------------------------------------------------");
// JsUser.email = "john@newemail.com";
// console.log(JsUser);
// Object.freeze(JsUser); //freezes the object and makes it immutable
// JsUser.email = "john@blizzard.com";
//console.log(JsUser);
// console.log("-------------------------------------------------------");

//functions

JsUser.greetings = function(){
    console.log("Hello Js User");
    console.log(`This is my age: ${this.age}`);
    console.log(`This is my age: ${this["full name"]}`);
    // console.log(`This is my age: ${this."full name"}`); this will give error as it is not a valid syntax
    
}

console.log(JsUser.greetings()); // this will return undefined because we are not returning anything from the function
console.log(JsUser.greetings); // this will return the function


