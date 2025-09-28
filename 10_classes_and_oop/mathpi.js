const descriptor = Object.getOwnPropertyDescriptor(Math,"PI");
console.log(descriptor);

// Object.defineProperty(Math,"PI",{
//     writable:true,
//     configurable:true
// });
// Math.PI = 3;
// console.log(Math.PI);

// cant be changed 

const User ={
    name :'Ben hensen',
    Profession : 'Guitarist',
    isAvailable: false
}
// another way to define property
Object.defineProperty(User,"Age",{
    value: 25,
}); // makes the property non-writable and non-configurable by default

console.log(`The name is ${User.name}`);
console.log(`The age is ${User.Age}`); 


// The difference between different way to create property is default attributes
console.log(Object.getOwnPropertyDescriptor(User,"name"));
console.log(Object.getOwnPropertyDescriptor(User,"Age"));

Object.defineProperty(User,"name",{
    writable:false,
    configurable:true
});

User.name = "John Doe";
console.log(User.name); //name does changes due to the property writable is set to false

Object.defineProperty(User,"name",{
    writable:true,
    configurable:false
});

// Object.defineProperty(User,"name",{
//     writable:true,
//     configurable:true
// }); // throws error as configurable is set to false and its a one time permanenent change

// what does configurable do?
// it prevents the property from being deleted or changed to an accessor property

delete User.name; // throws error as configurable is set to false
console.log(User.name); // John Doe

// Object.seal(User); // seals the object, makes all properties non-configurable and non-writable
// Object.freeze(User); // freezes the object, makes all properties non-configurable and non-writable and also prevents adding new properties


Object.defineProperty(User,"isAvailable",{}); // default value of writable and configurable is false
console.log(Object.getOwnPropertyDescriptor(User,"isAvailable"));

User.isAvailable = true; // throws error as writable is set to false
console.log(User.isAvailable); // false

delete User.isAvailable; // throws error as configurable is set to false


const NewUser = {
    firstName : 'William',
    Age : 30,
    isAvailable : true,
    detail: function(){
        return `The name is ${this.firstName} and age is ${this.Age}`;
    }
}

for (let [key,value] of Object.entries(NewUser)){
    if(typeof value!== 'function'){ //this is done to skip the function property
        console.log(`${key} : ${value}`);
    }
}

Object.defineProperty(NewUser,"Age",{
    enumerable:false
});
// makes the property non-enumerable so it won't show up in for...in loop or Object.keys() method
for (let [key,value] of Object.entries(NewUser)){
    if(typeof value!== 'function'){ //this is done to skip the function property
        console.log(`${key} : ${value}`);
    }
}