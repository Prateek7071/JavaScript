//for 

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

for (let i = 0; i <= 10; i++) {
    if(i===5)
        continue;
    console.log(i);    
} //continue skips that iteration

console.log(`--------------------------------------`);


for (let i = 0; i <= 10; i++) {
    if(i===5)
        break;
    console.log(i);
}

//break ends the loop

console.log(`--------------------------------------`);

let myArray = ['hey', 'there', 'yes', 'you' ]

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
        
}