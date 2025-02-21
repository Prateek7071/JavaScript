const name = "John";    //one way of declaring string
const gameName = new String("Doe"); //another way of declaring string

console.log(name + " " + gameName); // one way of concatenating string OLD NOT RECOMMENDED

console.log(`This is the new way to concatinate ${name} and ${gameName}`); // new way of concatenating string
console.log(`This is the new way to concatinate ${name}${gameName}`); // new way of concatenating string


console.log(name.length); // length of the string
console.log(name.toUpperCase()); // convert string to uppercase
// console.log(name.match(J)); // Error
console.log(name.match('J'));

const sent= "The quick brown fox jump over the lazy dog.";
const index= 4;

const str1 = "Hello";
const str2 = "World";

const arr1= ["Hello", "Learner"];

//Prototypes
console.log(`Prototype 'at' ${sent.at(-4)}`); 
console.log(`Prototype 'at' ${sent.at(index)}`);

console.log(`Prototype 'charAt' ${sent.charAt(index)}`);  //at() is new and different as it can take negative index // it returns string

console.log(`Prototype 'charCodeAt' ${sent.charCodeAt(index)}`); // return UTF char code of the character at the given index
console.log(`Prototype 'codePointAt' ${sent.codePointAt(index)}`); // charCodeAt() is UTF-16, codePointAt() is Unicode

console.log(`Prototype 'concat' ${str1.concat(" ",str2)}`); //concatenate two strings
console.log(`Prototype 'concat' ${str1.concat(` ${str2}`)}`); //concatenate two strings
console.log(`Prototype 'concat' ${str1.concat(`can do anything here ${str2}`)}`); //concatenate two strings
console.log(`Prototype 'concat' ${str1.concat(arr1)}`); //concatenate two strings

console.log(sent.length);
console.log(`Prototype 'endsWith' ${sent.endsWith("dog.",2)}`); // check if string ends with the given string 
//                                                 syntax-> endsWith(searchString, endPosition// is the limit upto which it checks)

console.log(`Prototype 'includes' ${sent.includes(`fox`)}`); // check if string includes the given string
console.log(`Prototype 'includes' ${sent.includes("fox")?"YES":"NO"}`); // new way of writing ternary operator

console.log(`Prototype 'indexOf' ${sent.indexOf("jump",21)}`); //reutrn false as 21 is the starting position where it starts checking which is greater than the length of the string
console.log(`Prototype 'indexOf' ${sent.indexOf("jump",20)}`); //return index of the substring
console.log(`Prototype 'indexOf' ${sent.indexOf("jump")}`); // starts with 0 as nothing is given






