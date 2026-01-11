function firstNonRepeatedChar(str) {
const charCount = new Map()
for(let char of str){
	charCount.set(char,(charCount.get(char)||0)+1)
}
for(let val of str){
	if(charCount.get(val)===1){
		return val
	} 
}
	return null
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 



// || 0 this checks if first value is truthy it returns if not returns value2 ex value1 || value2 .. If value1 is truthy, return value1
//If value1 is falsy, return value2