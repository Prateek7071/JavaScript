const table = document.querySelector('.student')
const btnSortAZ = document.getElementById('sortAZ')
const btnSortZA = document.getElementById('sortZA')
const btnSortMarks = document.getElementById('sortMarks')
const btnSortPass = document.getElementById('sortPass')
const btnSortClass = document.getElementById('sortClass')
const btnSortGender = document.getElementById('sortGender')
const page = document.querySelector('.page')

const searchInput = document.querySelector('input[type="search"]');
const searchBtn = document.getElementById('searchBtn');

let data;

async function getAllUsers(){
  try{
    const response = await fetch('https://gist.githubusercontent.com/harsh3195/b441881e0020817b84e34d27ba448418/raw/c4fde6f42310987a54ae1bc3d9b8bfbafac15617/demo-json-data.json');
    
    data = await response.json()
    await renderData(data)
    
    
  }catch(error){
    console.log(error)
  }
}

function renderRow(id,img,name,gender,sclass,marks,passing,email){
  table.innerHTML+=`<tr>
      <td>${id}</td>
      <td class="name-td">
        <div class="name-cell">
          <img src="${img}" height="38px" width="38px" alt="${name}">
          <span>${name}</span>
        </div>
      </td>
      <td>${gender}</td>
      <td>${sclass}</td>
      <td>${marks}</td>
      <td>${passing}</td>
      <td>${email}</td>
  </tr>`
}

function passing(res){
  if(res===true)
    return `Passed`
  else
  return `Failed`
}

async function renderData(data){
  table.innerHTML=`
    <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Gender</th>
        <th>Class</th>
        <th>Marks</th>
        <th>Passing</th>
        <th>Email</th>
    </tr>
    `
  
  data.forEach(e=>{
    let name = `${e.first_name} ${e.last_name}`
    let status = passing(e.passing)
    renderRow(e.id,e.img_src,name,e.gender,e.class,e.marks,status,e.email)
  })
}

function spawnNewTable(data){
  // ik this function is redundant by i'm lazy
  let table2= document.createElement('table')
  table2.classList.add('student')
  table2.id = 'female-table';
  table2.innerHTML=` <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Gender</th>
      <th>Class</th>
      <th>Marks</th>
      <th>Passing</th>
      <th>Email</th>
  </tr>`
  data.forEach(e=>{
    let name = `${e.first_name} ${e.last_name}`
    let status = passing(e.passing)
    table2.innerHTML+=`<tr>
        <td>${e.id}</td>
        <td class="name-td">
          <div class="name-cell">
            <img src="${e.img_src}" height="38px" width="38px" alt="${name}">
            <span>${name}</span>
          </div>
        </td>
        <td>${e.gender}</td>
        <td>${e.class}</td>
        <td>${e.marks}</td>
        <td>${status}</td>
        <td>${e.email}</td>
    </tr>`
  })
  page.appendChild(table2)
}

btnSortAZ.addEventListener('click', () => {
  let newData = structuredClone(data);
  newData.sort((a, b) => {
    let nameA = `${a.first_name} ${a.last_name}`.toLowerCase();
    let nameB = `${b.first_name} ${b.last_name}`.toLowerCase();
    return nameA.localeCompare(nameB);
  });
  renderData(newData);
});

btnSortZA.addEventListener('click', () => {
  let newData = structuredClone(data);
  newData.sort((a, b) => {
    let nameA = `${a.first_name} ${a.last_name}`.toLowerCase();
    let nameB = `${b.first_name} ${b.last_name}`.toLowerCase();
    return nameB.localeCompare(nameA); 
  });
  renderData(newData);
});

btnSortMarks.addEventListener('click',()=>{
  let newData = structuredClone(data);
  newData.sort((a, b) => a.marks-b.marks)
  renderData(newData)
  
})

btnSortPass.addEventListener('click',()=>{
  let newData = structuredClone(data);
  newData=newData.filter(e=>{
    return e.passing===true
  })
  renderData(newData)
})

btnSortClass.addEventListener('click',()=>{
  let newData = structuredClone(data);
  newData.sort((a, b) => a.class-b.class)
  renderData(newData)
})

btnSortGender.addEventListener('click',()=>{
  let newData = structuredClone(data);
  let maleData = newData.filter(e=>{
    return e.gender==='Male'
  })
  let femaleData = data.filter(e => {
    return e.gender === 'Female'
  })
  
  renderData(maleData)
  spawnNewTable(femaleData)
})

searchBtn.addEventListener('click',e=>{
  e.preventDefault()
  handleSeach()
})
searchInput.addEventListener('input', e=>{
  e.preventDefault()
  handleSeach()
});

function clearExtraTables() {
  const extraTable = document.getElementById('female-table');
  if (extraTable) {
    extraTable.remove();
  }
}

function handleSeach(){
  clearExtraTables();
  const query= searchInput.value.toLowerCase()
  
  const filterData = data.filter(e=>{
    return(
      e.first_name.toLowerCase().includes(query) || e.last_name.toLowerCase().includes(query) || e.email.toLowerCase().includes(query))
  })
  renderData(filterData)
}

getAllUsers()