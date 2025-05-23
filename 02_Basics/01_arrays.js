// arrays in js are resizable and can contain any type of data

const myArray1 = [1,2,3,"hello",true,undefined,null,{}];
const myArray = [1,2,3,4,5,6];

// array makes shalow copy, i.e share the reference of the object
// deep copy is not possible in js, it means it does not create a new object in memory


myArray.push("pushed",7);
console.log(myArray);

myArray.pop();
console.log(myArray);

myArray.shift(); // remove first element
myArray.unshift("first"); // add first element

console.log(myArray);  

// slice and splice
console.log("-------------------------------------------------------");

const myArray2 = [1,2,3,4,5,6];
const myArray3 = myArray2.slice(1,4); // slice does not change the original array and it is exclusive of the end index
console.log(myArray3);
console.log(myArray2); // original array is not changed
const myArray4 = myArray2.splice(1,4); // splice changes the original array and is inclusive of the end index
console.log(myArray4); // removed elements
console.log(myArray2); // original array is changed

console.log(myArray2.join()); // join elements of the array into a string

myArray1.shift(); // remove first element
console.log(myArray1);
myArray1.unshift("first"); // add first element
console.log(myArray1);
myArray1.pop(); // remove last element
console.log(myArray1);

//Error
console.log("-------------------------------------------------------");

const myArray5 = [1,2,3,4,5,6];
const myArray6 = [7,8,9,10];
const myArray7 = myArray5; //IMP This is not a copy, it is a reference to the same array. See more on shalow and deep copy and reference variables below..
console.log(myArray7); // so this is the same as myArray5 and changes to any affects the other

myArray5.push(myArray6); // push array into array
console.log(myArray5); // [1,2,3,4,5,6,[7,8,9,10]]

console.log(myArray7);

const myArray8 = [...myArray7, ...myArray6];
console.log(myArray8); // [1,2,3,4,5,6,[7,8,9,10],7,8,9,10]

console.log("-------------------------------------------------------");

//referece to duplicate variable, shalow copy and deep copy

const original = [1, [2, 3], { a: 4 }];

// Shallow copy (nested objects/arrays are still shared)
const shallow = original.slice();
shallow[1][0] = 99;
console.log(original); // [1, [99, 3], { a: 4 }]

// a shallow copy is a copy of the reference, so if you change the original it wont affect the copy or vice versa,
// but if you make changes to the nested objects/arrays, it will affect both

console.log(shallow); // [1, [99, 3], { a: 4 }]
//example of nested change

original[2].a=5;
console.log(original); // [1, [99, 3], { a: 5 }]
console.log(`changed array is, ${shallow}`); // this will output [1, [99, 3], object Object] because it is a reference to the same object
// so if you want to see the object, you have to use JSON.stringify
console.log("changed array is "+JSON.stringify(shallow)); // [1, [99, 3], {"a":5}]

// or you can use below method to see the object
process.stdout.write("changed array is, ");
console.log(shallow); // [1, [99, 3], { a: 5 }]

shallow[2].a = 6;
console.log("original after making changes to shallow copy array"+JSON.stringify(original)); // [1, [99, 3], { a: 6 }]

// In conclusion, Changes to the array structure (such as adding or removing elements) in the original array will not affect the shallow copy, and vice versa. 
//However, changes to nested objects or arrays within either array will be reflected in both, because they share references to those nested elements.

// Deep copy (nested objects/arrays are also copied)
const deep = JSON.parse(JSON.stringify(original));
deep[1][0] = 42;
console.log(original); // [1, [99, 3], { a: 4 }]
console.log(deep);     // [1, [42, 3], { a: 4 }]
console.log("-------------------------------------------------------");

const myArray9 = [1,2,3,4,5,6];
const myArray10 = [7,8,9,10];

myArray9.concat(myArray10); // concat does not change the original array
console.log(myArray9); // [1,2,3,4,5,6]
console.log(myArray10); // [7,8,9,10]
// so if you want to change the original array, you have to assign it to a new variable
// or use the spread operator

const myArray11 = [...myArray9,...myArray10]; // spread operator
console.log(myArray11);

// or second method (less used)
const myArray12 = myArray9.concat(myArray10); 
console.log(myArray12); // [1,2,3,4,5,6,7,8,9,10]
console.log("-------------------------------------------------------");
// nested array

const nestedArray = [1,2,[3,4,[5,6]]];
console.log(nestedArray); // 5
console.log(nestedArray[2][2][0]); // [3,4,[5,6]]
const clean_array = nestedArray.flat(2); // flat() is used to flatten the array and it takes the depth as an argument example 2 here (can also write infinity if not sure but not recommended)
console.log(clean_array); // [1,2,3,4,5,6]

console.log("-------------------------------------------------------");

console.log(Array.isArray("John"));
console.log(Array.from("John")); 
console.log(Array.from({name : "John"})); //Interview question, need to provide if want to make array from key or value

const score1= 100;
const score2= 200;
const score3= 300;


console.log(Array.of(score1,score2,score3)); // [100,200,300]
