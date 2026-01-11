const titleInput = document.getElementById('title')
const authorInput = document.getElementById('author')
const isbnInput = document.getElementById('isbn')

const submitBtn = document.getElementById('submit')
const tbody=document.getElementById('book-list')
submitBtn.addEventListener('click',(e)=>{
  e.preventDefault()
  displayRecord()
})

tbody.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')) {
    deletedRow(e);
  }
});

function displayRecord(){
  const newRow = document.createElement('tr')
  newRow.innerHTML = `
    <td>${titleInput.value}</th>
    <td>${authorInput.value}</td>
    <td>${isbnInput.value}</td>
    <td><button class="delete">x</button></td>
    `
  console.log('accessed')
  tbody.appendChild(newRow);
  titleInput.value = '';
  authorInput.value = '';
  isbnInput.value = '';
}

function deletedRow(e) {
  e.target.closest('tr').remove();
}