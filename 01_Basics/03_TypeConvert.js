let score = 21
// console.log(score)

let converted = Number(score)
// console.log(typeof score)

// Operations

// let value = 3
// let negValue=-value
// console.log(negValue)
// console.log(value+negValue)
// console.log(2/3)

// ******* OPERATIONS ******** //

console.log(2+3)
console.log("1" + 2);
console.log("1" + "2");
console.log(1 + "2");
console.log(1 + 2)
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")

console.log(1+2+"3") // 33
console.log(1+"2"+3) // 123 


// prefix and postfix of precedence operator

let x=100

//{ avoid the below conversions as it is not clear, sometimes it will be string and sometimes it will be number language inconsistency}
// console.log(null > 0);  // false
// console.log(null == 0); // false
// console.log(null >= 0); // true

// console.log(undefined > 0);  // false
// console.log(undefined == 0); // false
// console.log(undefined >= 0); // true



// reason being equality ( == ) and comparision  operator works differently, comparision converts null into number (0) !!!!!!!!!!!!

 // === is called strict equality operator, it does not convert the type of the value
 // it will check datatype as well as value 

console.log ("2" === 2 ); // false as datatype is different, one is string and other is number..
