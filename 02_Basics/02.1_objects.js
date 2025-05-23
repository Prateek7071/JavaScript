// Declareing object using constructor function

const tinderUser = new Object()

tinderUser.id= 123
// tinderUser.id2= '123'
// tinderUser.id3= "123"
tinderUser.name= "John"
tinderUser.isLoggedIn = false
//console.log(typeof tinderUser.id );
// console.log(typeof tinderUser.id2 );
// console.log(typeof tinderUser.id3 );
console.log(tinderUser);
console.log("-------------------------------------------------------");

const regularUser= {
    email: "user@mail.com",
    fullname: {
        userfullname:{
            firstname: "Elsa",
            lastname: "Snow"
        }
    }
}

console.log(regularUser.fullname?.userfullname.lastname);

console.log("-------------------------------------------------------");

//combining objects like arrays
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

const obj3= [obj1,obj2];
console.log(obj3); // same problem of object inside of an object

const obj4= Object.assign( {}, obj1,obj2); //method 1 using assign
console.log(obj4);

const obj5= {...obj1,...obj2} //method 2 using spread
console.log(obj5);

console.log("-------------------------------------------------------");

// example of how we recieve data from server

const users=[
    {
        id: 1,
        name: "John"
    },
    {
        id: 2,
        name: "Elsa"
    },
    {
        id: 3,
        name: "Ash"
    }
]

console.log(users[1].id);

console.log(tinderUser);
console.log(Object.keys(tinderUser)); // returns array so we can use loops and other methods
console.log(Object.values(tinderUser));
console.log(Object.keys(tinderUser).length); 
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("id")); // true
console.log(tinderUser.hasOwnProperty("id2")); // false 









