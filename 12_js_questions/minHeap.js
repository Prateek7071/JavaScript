class MinHeap{
  constructor(){
    this.heap=[]
  }
  
  getParent(i){
    return Math.floor((i-1)/2)
  }
  
  getLeft(i){
    return 2 * i + 1;
  }
  
  getRight(i){
    return 2 * i + 2;
  }
  
  heapifyUp(i) {
    while (i > 0 && this.heap[i] < this.heap[this.getParent(i)]) {
      this.swap(i, this.getParent(i))
      i = this.getParent(i)
    }
  }
  
  insertHeap(val){
    this.heap.push(val)
    this.heapifyUp(this.heap.length-1)
  }
  
  
  swap(x,y){
    [this.heap[x],this.heap[y]]=[this.heap[y],this.heap[x]]
  }
  
  heapifyDown(i) {
    let smallest = i;
    const left = this.getLeft(i);
    const right = this.getRight(i);
    
    if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
      smallest = left;
    }
    
    if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }
    
    if (i !== smallest) {
      this.swap(i, smallest)
      this.heapifyDown(smallest);
    }
  
  }
  extractMin(){
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();
    
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return min;
  }
  
  size(){
      return this.heap.length
  }
  
}

function minCost(arr){
  if (arr.length <= 1) return 0;

  const minHeap = new MinHeap()
  
  for(const k of arr){
    minHeap.insertHeap(k)
  }
  
  let totalCost = 0;
  
  while(minHeap.size()>1){
    const first = minHeap.extractMin()
    const second = minHeap.extractMin()
    
    //cost 
    const cost = first +second
    totalCost += cost;
   
    minHeap.insertHeap(cost); 
  }
  return totalCost;
}

function main(){
  const arr = [1,2,3,4,5]
  const arr2 = [4,3,2,6]
  return minCost(arr2)
}

console.log(main())