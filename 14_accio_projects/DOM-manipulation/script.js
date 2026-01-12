let counter = 1
let tag = true
const decrement = document.getElementById('Decrement')
const increment = document.getElementById('Increment')
const clear = document.getElementById('Clear')
const counterOut = document.getElementById('output')
const container = document.querySelector('.container')
const buttons = document.querySelector('.buttons')
const error = document.createElement('p')

clear.addEventListener('click',e=>{
  displayMessage(0)
})

increment.addEventListener('click',e=>{
  counter++;
  counterOut.textContent=`Your Current Count is: ${counter}`
  if(!tag){
    tag = true
    error.remove()
    buttons.appendChild(clear)
  }
})

decrement.addEventListener('click',e=>{
    if(counter>0){
    counter--;
    counterOut.textContent=`Your Current Count is: ${counter}`
    }
    if(counter===0 && tag){
      tag = false
      clear.remove()
      error.textContent = "Error : Cannot go below 0"
      container.appendChild(error)
      error.classList.add("error")
    }
})

function displayMessage(count){
  if(count===0 && tag){
    tag = false;
    counter = 0
    counterOut.textContent=`Your Current Count is: 0`
    clear.remove()
    error.textContent = "Error : Cannot go below 0"
    container.appendChild(error)
    error.classList.add("error")
  }
  
}