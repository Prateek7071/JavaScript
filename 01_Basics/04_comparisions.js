console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);
// reason being equality check == and >= and comparision check > and < works difffererntly, 
//comparision converts null to a number and undefined to NaN treating null as hence 3 is true and 1 is false;

console.log("2">0);
console.log('2'>0);
console.log(2>0);
console.log("2"=== 2);
