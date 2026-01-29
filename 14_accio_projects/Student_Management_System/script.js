const table = document.querySelector('.student')

function renderRow(id,name,gender,sclass,marks,passing,email){
  table.innerHTML+=`<tr>
      <th>${id}</th>
      <th>${name}</th>
      <th>${gender}</th>
      <th>${sclass}</th>
      <th>${marks}</th>
      <th>${passing}</th>
      <th>${email}</th>
  </tr>`
}
renderRow()
