const user = {
    username: "John",
    age: 30,
    salary: 50000,

    
    welcomeMessage: function() {
        console.log(`Welcome ${this.username}${this.age}${this.salary}`); 
        // console.log(`Welcome ${this.username, this.age, this.salary}`); // this is not a valid syntax
        
    }
    //console.log(welcomeMessage(username, age));
}

    console.log(user.welcomeMessage());

    const Out_of_context = function(){
        let username = "Doe";
        console.log(`Welcome ${this.username}`);
        
    }

    Out_of_context() // Does not return Username as not context aware in side of funciton works only withing objects

// arrow function is declared as () => {}, you can hold this in a variable like so and pass parameters
console.log("-------------------------------------------------------");

const cat = () =>{
    let username = 'John'
    console.log(`The username is ${this}`); //similarly to function this doesnt work inside arrow func as well
    console.log(`The username is ${this.username}`); //neither does this 
    
}

console.log(cat());

console.log("-------------------------------------------------------");

// for single line function can use this below

const addTwo = (num1, num2) => num1+num2 // no need for {} and return.
console.log(addTwo(4,5))

const addThree = (num1, num2, num3) => (num1+num2+num3) // no need for {} and return, but we can use () with no return. called IMPLICIT return
console.log(addThree(4,5,1))

const subTwo = (num1, num2) => {
    return num1-num2 // need for return when using {} called EXPLICIT return 
    
}

console.log(subTwo(4,5))

console.log("-------------------------------------------------------");
// returning object 

const displayObj = () => {username: "Samuel"} // cant return object like this
console.log(displayObj());

const displayObj1 = () => ({username: "Samuel"}) // correct way to return object 
console.log(displayObj1());

console.log("-------------------------------------------------------");

const myArray = [2,4,6,8,10,12]

myArray.forEach(() => {}) //can pass function like this as well

//example
const array1 = ["a", "b", "c"];
array1.forEach((element) => console.log(element));


