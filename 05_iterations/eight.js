const myNums = [1,2,3]
//acc= accumulator, curval= current value
const myTotal = myNums.reduce((acc,curval)=>{
	console.log(`acc: ${acc}, cur: ${curval}`)
	return acc+curval //here for the first iteration acc will take initial value
	//which can be anything, here it is 2 as given after the funtion down below
	//the syntax .reduce((acc,cur)=>{return acc+cur},inital_value)
},2)
console.log(myTotal)

const shoppingCart= [
	{
	 itemName:"banana",
	 price:12
	},
	{
	 itemName:"apple",
	 price:100
	},
	{
	 itemName:"Avocado",
	 price: 250
	}
]

const priceToPay= shoppingCart.reduce((acc, item)=> acc+ item.price,0)
console.log(priceToPay)
