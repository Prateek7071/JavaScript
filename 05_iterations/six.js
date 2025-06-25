const lang = ["JS", "clang","py","swift"]

const result = lang.forEach((item)=>{console.log(item)})
console.log(result) //this is undefined as forEach does not return anything.

//using filter to return 

const myNums = [1,2,3,4,5,6,7,8,9,10]
const result1= myNums.filter((item)=>item>4)
console.log(result1)

const result2= myNums.filter((num)=>{
	num>4
}) // this will not return anything due to scope, remember explicit and implicit return?

console.log(result2) 
const result3= myNums.filter((num)=>{
	return num>4
}
)
console.log(result3)

//same thing but using forEach

const newNums = [] //keep empty

myNums.forEach((num)=>{
	if (num>4){
		newNums.push(num)
	}
})

console.log(newNums)

const books = [
	{title: 'Book 1',genre: 'Fiction',publish: 1981 ,edition:2004},
	{title: 'Book 2',genre: 'Non-Fiction',publish:1988,edition:1989},
	{title: 'Book 3',genre: 'History',publish:2000,edition:2003},
	{title: 'Book 4',genre: 'Non-Fiction',publish:2005,edition:2025},
	{title: 'Book 5',genre: 'Science',publish:2020,edition:2021},
	{title: 'Book 6',genre: 'Fiction',publish:2001,edition:2009},
	{title: 'Book 7',genre: 'History',publish:2000,edition:2004},
	{title: 'Book 8',genre: 'Non-Fiction',publish:2002,edition:2005}
]

let userBooks = books.filter((bk)=> bk.genre === 'History')
userBooks = books.filter((bk)=> {
	return bk.publish >= 2000 && bk.genre === 'History'
})
console.log(userBooks);
