function findPair(arr1,arr2,x){
  const set2= new Set(arr2)
  const pair = []
  for(const u of arr1){
    const needed = x-u
    if(set2.has(needed)){
      pair.push(`${u},${needed}`)
    }
  }
  if(pair.length === 0){
    return -1;
  }else{
    return pair.join(" ")
  }
}
arr1= [1,2,4,5,7]
arr2= [5,6,3,4,8]
console.log(findPair(arr1, arr2, 9))