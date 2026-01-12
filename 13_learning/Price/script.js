const getSumBtn = document.createElement("button");
const tablee= document.getElementById('tablee')
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  const prices = document.querySelectorAll('.prices')
  let sum = 0

  prices.forEach(e=>{
    let k = parseInt(e.textContent)
    sum+=k
  })
  
  console.log(sum)
  const newRow = document.createElement('tr')
  newRow.innerHTML=`
    <td colspan="2">${sum}</td>
    `
  tablee.appendChild(newRow)
  newRow.setAttribute("id",'ans')

};

getSumBtn.addEventListener("click", getSum);