// Primitive 
// for primitive data types, the value is stored directly shared with the variable not the reference location hence call by value.

// 7 Types: String, Number, Boolean, Null, Undefined, BigInt, 

// let name = "Prateeek";
// console.log(name);

// {
//     name = "praveen";
//     console.log(name);
// }

// console.log(name);


let user = {
    name: "John",
    email: "somehting@mail.com"
}

console.log(user.name);

let user2 = user;

user2.name = "Praveen";

console.log(user.name);
console.log(user2.name);


function changeName(user) { // call by reference
    user.name = "santosh";
}
console.log(user.name);
changeName(user);
console.log(user.name);