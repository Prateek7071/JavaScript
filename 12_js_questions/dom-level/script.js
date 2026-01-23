// let target = document.getElementById("level")
// let level = 0
// while(target){
//   level++
//   console.log(target)
//   target=target.parentNode
// }

// alert(`The level of the element is: ${level}`)
// 

function insert_Row() {
  const table = document.getElementById('sampleTable');
  let newRow = table.insertRow(0);
  let cell1 = newRow.insertCell(0);
  let cell2 = newRow.insertCell(1);
  
  cell1.textContent = 'New Cell1';
  cell2.textContent = 'New Cell2';

}
 