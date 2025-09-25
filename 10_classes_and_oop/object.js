function multiplyBy5(num){
    return num*5
}

multiplyBy5.power = 2
console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function createUser(usernname, score){
    this.usernname= usernname
    this.score = score
}

//as funciton is also an objest we can also decalre funcitons like 

createUser.prototype.increment = function(){
    this.score++; // here the 'this' tells the current context, this means jis ka 
}

createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}

/*
const Emp1 = createUser("mango", 50)
const Emp2 = createUser("Banana", 24)

Emp1.increment()
Emp1.printMe()

here the new keyword is very important, as when we injected increment and printMe function in the prototype of createUser function,
emp1 and emp2 are not having that function in their prototype, so when we use new keyword it will create a new object and
it will link the prototype of createUser function to the prototype of emp1 and emp2 object, so now emp1 and emp2 can use those functions
*/


const Emp1 = new createUser("mango", 50)
const Emp2 = new createUser("Banana", 24)

Emp1.increment()
Emp1.printMe()

/*
Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. 
This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. 
If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), 
 the newly created object is returned.

*/