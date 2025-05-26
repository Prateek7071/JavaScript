//scope
var c=500
let k=201
if(true){ 

    let a=10
    const b=20
    c= 21 //even if you declare it as , c=21 then also same issue
    let k=500
    console.log(k);
    
} //block scope

// console.log(a); a is not defined
// console.log(b); b is not defined
console.log(c); 

console.log(k);

//x-----------------------------------Important----------------------------------x
console.log("-------------------------------------------------------");

console.log(addOne(5)); // this will work because addOne is a function declaration and it is hoisted, so it can be called before it is defined.
// function declarations are hoisted, so they can be called before they are defined.

function addOne(nums){
    return nums+1
}

// console.log(addTwo(6)); 
// this will throw an error because addTwo is not defined yet this is a function expression 
// function expressions are not hoisted, so they need to be defined before they are called.

const addTwo= function(nums){
    return nums+2
}

console.log(addTwo(6)); 
