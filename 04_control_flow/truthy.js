const email="john@doe.com"

if (email) {
    console.log("Email is truthy");
    } else {
    console.log("Email is falsy");
    }
// Output: Email is truthy

const emptyString = "";
if (emptyString) {
    console.log("Empty string is truthy");
}
else {
    console.log("Empty string is falsy");
}
// Output: Empty string is falsy
const zero = 0;
if (zero) {
    console.log("Zero is truthy");
}
else {
    console.log("Zero is falsy");
}
// Output: Zero is falsy

const emptyArray = [];  // Interesting case: an empty array is considered truthy in JavaScript because it is an object.
if (emptyArray) {
    console.log("Empty array is truthy");
}
else {
    console.log("Empty array is falsy");
}
// Output: Empty array is truthy
console.log("--------------------");

// Falsy values: false, 0, -0, "", BigInt 0n, null, undefined, NaN
const falsyValues = [false, 0, -0, "", BigInt(0), null, undefined, NaN];
falsyValues.forEach(value => {
    if (value) {
        console.log(`${value} is truthy`);
    } else {
        console.log(`${value} is falsy`);
    }
});
console.log("--------------------");

// Surprising truthy values: objects, arrays, functions, and non-empty strings
// values like, "0", "false", [], {}, function(){}, " "  
// funtion(){} is an empty function, which is also truthy
const truthyValues = ["0", "false", [], {}, function(){}, " "];
truthyValues.forEach(value => {
    if (value) {
        console.log(`${value} is truthy`);
    } else {
        console.log(`${value} is falsy`);
    }
});
console.log("--------------------");

const arra= [1, 2, 3];
arra.forEach(value => {
    if(value){
        console.log(`${value} is truthy`);
    }
    else {
        console.log(`${value} is falsy`);
    }
});

console.log("----------------------------------------");

//to check empty array

const myArray = []

if(myArray.length === 0){
    console.log("empty array");
}
console.log("----------------------------------------");

const emptyObj = {}

if(Object.keys(emptyArray).length === 0){ // here we are asking for a key which returns an array 
    console.log("Empty ebject");
}

console.log("----------------------------------------");

// Nullish coalescing Operator (??) : for null and undefined 

let val1 = 5 ?? 10
console.log(val1);

let val2 = null ?? 10
console.log(val2);

// This is designed for safety in case when we ask values from db and doesnt get anything in return then we use this where 
// in place of 10 we would have another complex funtion 

let val3 = undefined ?? 10
console.log(val3);

let val4 = undefined ?? 10 ?? 20 // it takes the first valid value
console.log(val4);

let val5 = undefined ?? null 
console.log(val5);

let val6 = null ?? undefined
console.log(val6);
 
let val7 = undefined ?? null ?? 20
console.log(val7);

console.log("----------------------------------------");
// Terniary operator , it is completely different than nullish coalescing operator

// condition?true:false

(5>3)? console.log("true"): console.log("false");


