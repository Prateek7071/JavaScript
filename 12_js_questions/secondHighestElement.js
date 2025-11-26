const arr = [1, 2, 1, 1, 1];
const sett = new Set(arr)
if(sett.size === 1){
  console.log("hahha")
}

function secondHighest(arr) {
			const setN = new Set(arr)
			if(arr.length <=1){
				return -Infinity
			}else if(setN.size === 1){
				return -Infinity 
			}else{
			const arr2 = arr.sort((a,b)=>b-a);
			const g = new Set(arr2);
			const gg = [...g]
			return gg[1] 
			}
		}
console.log(secondHighest(arr))