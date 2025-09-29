function setUsername(username){
    //say complex calc happens and then username is set
    //db calls and what not

    this.username = username
    console.log('called');
    
}

function createUser(username, email, password){
    // setUsername(username) // so this is called but this.username is not set, and then the execution context is removed from call stack
    // and then the below lines are executed and this.username is never set
    // so as to hold the reference of this.username we use call method

    setUsername.call(this,username) // here this refers to the object created by createUser function and not the this of setUsername function
    // so now this.username is set properly


    this.email = email
    this.password = password
}

const obj = new createUser("john","john@mail.com","1322165")

console.log(obj);
console.log(obj.email);
console.log(obj.username); // here we dont have access to username 

