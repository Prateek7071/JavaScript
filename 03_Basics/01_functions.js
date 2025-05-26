function greetings(username= "sam"){ //default value is sam if nothing passed else the parameter will be replaced with the argument
    if(!username){
        console.log("Please enter a username!")
        return
    }
    return `${username}, has logged in`
}

console.log(greetings());
console.log(greetings("sam"));

const user={
    name: "John snow",
    email: "john@email.com",
    id: 21,
    price: 299
}

function userDetail(anyobject){
    console.log(`username is ${anyobject?.name}, and the price is ${anyobject?.prices}`)
}
// userDetail(user) method 1
userDetail({
    name: "Sam",
    price: 200
})

const myNewArray= [200,500,300,250,540]
function secondElement(getArray){
    return getArray[1]
}

console.log(secondElement(myNewArray));
console.log(secondElement([120,150,350]));

function manyElements(val1, val2,...val3){
    return val3 //can also just use val3[2]
}

console.log(manyElements(210,2010,411,770,771));

console.log("-------------------------------------------------------");

function addTwoNumber(num1, num2){
    console.log(num1+num2);
    
}
const result = addTwoNumber(3,5) // returns undefined as function does not have a return statement
console.log(result); // undefined

function addThreeNums(num1, num2, num3){
    return num1 + num2 + num3
    console.log("this will not run because return statement ends the function execution");
    
}
const result2 = addThreeNums(3,5,7) // returns 15 as function has a return statement
console.log(result2);

