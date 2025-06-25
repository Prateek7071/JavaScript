const myNums = [1,2,3,4,5,6,7,8,9,10]
//lets add 10 to each number
//can also be done using forEach
//const newNums= myNums.map((num)=> num +10) //automatically returns

//chaining
const newNums= myNums
		.map((num) => num*10)
		.map((num) => num+1) //values in num will be the value from above map i. 10,20 etc
		.filter((num) => num > 40)		
		.map((num) => num+2)		
console.log(newNums)


