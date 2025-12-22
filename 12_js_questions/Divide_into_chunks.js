const arr = [4,3,2,1];
let n = 4
const divide = (arr, n) => {
  // Write your code

	let N= n;
	let cost = []
	let res = []
	for(let k of arr){
		if(N>=k){
			N-=k
			cost.push(k)
      continue;
		}
		res.push(cost)
		cost = []
		N=n
		N-=k
		cost.push(k)
	}
	res.push(cost)
	return res
};

console.log(divide(arr,n))

const divide2 = (arr, n) => {
  return arr.reduce((result, num) => {
    const lastSubarray = result[result.length - 1];
    const currentSum = lastSubarray.reduce((sum, val) => sum + val, 0);
    
    if (currentSum + num <= n) {
      lastSubarray.push(num);
    } else {
      result.push([num]);
    }
    return result;
  }, [[]]).filter(sub => sub.length > 0);
};