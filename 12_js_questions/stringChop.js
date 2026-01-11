function stringChop(str, size) {
	let res = []
	if(!str||str.length=== 0 ){
		return res
	}
	if(str.length<=size){
		res.push(str)
		return res 
	}
	let i=0;
	while(i<str.length){
		res.push(str.slice(i,i+size))
		i+=size;
	}
	return res
}

console.log(stringChop("hello, world!",5))
console.log(stringChop('12345',2))
console.log(stringChop('abc',5))
console.log(stringChop("hello world",4))
console.log(stringChop(null,5))