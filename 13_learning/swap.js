//swap using destructor


class minHeap {
  constructor(arr) {
    this.arr = arr
  }
  swape(x,y){
    [this.arr[x],this.arr[y]]=[this.arr[y],this.arr[x]]
  }
}
let arr = [1,2,3,4,5]
let a = new minHeap(arr)
console.log(arr)
a.swape(1, 2);
console.log(arr)
//---------------------------------------------------------//



console.log('---------------------------------------------------')
let arr2 = [1,2,3,4,5]
console.log(arr2)

function swapw(x,y){
  [arr2[x],arr2[y]]=[arr2[y],arr2[x]]
}
swapw(2,3)
console.log(arr2)
