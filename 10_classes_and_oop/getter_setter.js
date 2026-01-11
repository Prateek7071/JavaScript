//Error :  maximum call stack size exceeded error due to infinite loop in getter and setter

// class User {
//     constructor(email, password){
//         this.email = email;
//         this.password = password;
//     }

//     get email(){
//         return this.email.toUpperCase();
//     }
//     set email(value){
//         this.email = value;
//     }
// }

// const boy = new User("hello@gmail.com","12345");
// console.log(boy.email); // maximum call stack size exceeded error due to infinite loop in getter and setter

//Solution : use a different property name for the actual property and the getter and setter

class User {
    constructor(email, password, age){
        this.email = email;
        this.password = password;
        this.age = age;
    }

    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email = value;
    }

    get password(){
        return `${this._password}hisdhishid`;
    }

    set password(value){
        if(value.length < 6){
            throw new Error("Password must be at least 6 characters long"); //it will throw error if password is less than 6 characters
        }
        this._password = value;
    }

}

const boy = new User("hello@gmail.com","12345555",21);
console.log(boy.email); 
console.log(boy.password);
console.log(boy._email); // it will show the actual value of the property 

//The new way for private properties is to use # before the property name but it is not supported in all browsers yet

class NewUser {
    #email
    #password
    constructor(email, password, age){
        this.#email = email;
        this.#password = password;
        this.age = age;
    }

    get email(){
        return this.#email.toUpperCase();
    }
    set email(value){
        this.#email = value;
    }

    get password(){
        return `${this.#password}hisdhishid`;
    }

    set password(value){
        if(value.length < 6){
            throw new Error("Password must be at least 6 characters long"); //it will throw error if password is less than 6 characters
        }
        this.#password = value; // it will not allow to access the property directly
    }

}

const newBoy = new NewUser("example@mail.com", "hdbskdjgfs" , 25);
console.log(newBoy.email); 
console.log(newBoy.password); 
//console.log(newBoy.#email); // it will throw error as #email is a private property
//console.log(newBoy.#passwordxi); // it will throw error as #password is a private property
