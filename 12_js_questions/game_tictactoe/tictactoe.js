const person1 = document.querySelector('#person-1')
const person2 = document.querySelector('#person-2')
const submit = document.querySelector('#submit')
const container = document.querySelector('.container')

let count = 0;
let playGame = true;
let a = [5, 5, 5, 5, 5, 5, 5, 5, 5];
let player1Name = '';
let player2Name = '';

submit.addEventListener('click', (e) => {
  e.preventDefault()
  
  // Save player names before DOM is replaced
  player1Name = person1.value || 'Player 1';
  player2Name = person2.value || 'Player 2';
  
  container.innerHTML = `
    <div class="message">
      <h1>Tic Tac Toe</h1>
      <h3 id="player">${player1Name}, you're up</h3>
    </div>
    <div class="grid" id="gridId">
        <div id="1"><h1> </h1></div>
        <div id="2"><h1> </h1></div>
        <div id="3"><h1> </h1></div>
        <div id="4"><h1> </h1></div>
        <div id="5"><h1> </h1></div>
        <div id="6"><h1> </h1></div>
        <div id="7"><h1> </h1></div>
        <div id="8"><h1> </h1></div>
        <div id="9"><h1> </h1></div>
    </div>
  `
  
  const div = document.getElementById('gridId')
  console.log(div)
  div.addEventListener("click", handleClick)
})

function handleClick(e) {
  if (playGame) {
    let targetid = e.target.id;
    
    // Prevent clicking on the h1 inside the div
    if (!targetid || isNaN(targetid)) return;
    
    let targetGrid = document.getElementById(targetid);
    
    if (a[targetid - 1] === 5) {
      count++;
      if (count % 2 === 0) {
        a[targetid - 1] = 0; // Red = 0
        targetGrid.style.backgroundColor = "red";
      } else {
        a[targetid - 1] = 1; // Blue = 1
        targetGrid.style.backgroundColor = "blue";
      }
      
      console.log(a);
      
      let result = calcResult();
      
      if (result !== -1) {
        playGame = false;
        setTimeout(() => {
          const message = document.querySelector('.message');
          if (result === 1) {
            message.innerHTML = `
              <h1>Tic Tac Toe</h1>
              <h3 id="player">${player1Name}, congratulations you won!</h3>
            `;
          } else {
            message.innerHTML = `
              <h1>Tic Tac Toe</h1>
              <h3 id="player">${player2Name}, congratulations you won!</h3>
            `;
          }
        }, 100);
      } else if (count < 9) {
        // Update turn display - count % 2 determines who just played
        displayMessage(count % 2);
      } else {
        // Draw condition
        const message = document.querySelector('.message');
        message.innerHTML = `
          <h1>Tic Tac Toe</h1>
          <h3 id="player">It's a draw!</h3>
        `;
      }
    }
  } else {
    window.location.reload();
  }
}

function calcResult() {
  // Check horizontal
  for (let i = 0; i < 9; i += 3) {
    let sum = a[i] + a[i + 1] + a[i + 2];
    if (sum === 3) return 1; // Blue wins
    if (sum === 0) return 2; // Red wins
  }
  
  // Check vertical
  for (let i = 0; i < 3; i++) {
    let sum = a[i] + a[i + 3] + a[i + 6];
    if (sum === 3) return 1;
    if (sum === 0) return 2;
  }
  
  // Check diagonals
  let sumd1 = a[0] + a[4] + a[8];
  let sumd2 = a[2] + a[4] + a[6];
  
  if (sumd1 === 3 || sumd2 === 3) return 1;
  if (sumd1 === 0 || sumd2 === 0) return 2;
  
  return -1;
}

function displayMessage(state) {
  const message = document.querySelector('.message');
  let name;
  
  // state is count % 2
  // If state is 1 (odd count), player 1 just played, so show player 2's turn
  // If state is 0 (even count), player 2 just played, so show player 1's turn
  if (state === 1) {
    name = player2Name;
  } else {
    name = player1Name;
  }
  
  message.innerHTML = `
    <h1>Tic Tac Toe</h1>
    <h3 id="player">${name}, you're up</h3>
  `;
  console.log('MESSAGED')
}