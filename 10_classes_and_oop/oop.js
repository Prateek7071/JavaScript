//object

const user = {
    username: "john",
    loginCount: 8,
    signedIn: true,

    getUserDetail: function(){
        console.log(`got user details from user ${this.username}`);
        console.log(this);
        
    }
}

//console.log(user.username);
//console.log(user.getUserDetail())
//console.log(this); 


//function

function User(username, loginCount, isLoggedIn){
    this.username = username,
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${username}`);
        
    }
    return this //no need to write this as it is implicitely defined
}

console.log(User("Sam", 29, true));
console.log('--------------------');


// see how userTwo is changing userOne because we are not using new keyword which creates a new instance of the object 
/*
const userOne = User("John",9,false)
const userTwo = User("changed", 11, true)
console.log(userOne);
*/

// using new keyword

const userOne = new User("Harry", 25, false)
const userTwo = new User("Jamie", 89, true)

console.log(userOne); //userTwo doesnt modify userOne as the constructor fucntions created a new instance

/* What the new keyword does
When you use the new keyword with a constructor function, it performs the following four steps:

A new empty object is created and assigned to this. It doesn't just create an empty object; it sets this newly created object as the 
this context for the function call.

The function's prototype is set on the new object. The new object's [[Prototype]] (its internal prototype) is linked to the 
constructor function's prototype property. This is what enables prototype inheritance, allowing the new object to access methods and properties defined on the constructor's prototype.

The constructor function is executed with this bound to the new object. The function runs, and any properties assigned 
to this (e.g., this.name = 'John') are set on the newly created object.

The new object is returned. Unless the constructor function explicitly returns its own object, 
the newly created object from step 1 is automatically returned. If the constructor returns a non-object value (like a string or number), 
that value is ignored, and the new object is still returned. If it returns an object, that object will be returned instead.
*/

console.log(userOne.constructor);
console.log(userOne instanceof User); //to check







