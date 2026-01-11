let count = 0;
let playGame = true;
let a = [5, 5, 5, 5, 5, 5, 5, 5, 5];

const message = document.getElementsByClassName('message')

const div = document.getElementById("ball");

div.addEventListener("click", (e) => {
  if (playGame) {
    let targetid = e.target.id; 
    let clicked = document.getElementById(targetid);
    console.log(clicked);
    console.log(count);
    if (a[targetid - 1] === 5) {
      count++;
      if (count % 2 === 0) {
        a[targetid - 1] = count % 2;
        clicked.style.backgroundColor = "red";
      } else {
        a[targetid - 1] = count % 2;
        clicked.style.backgroundColor = "blue";
      }
    }
    console.log(a);
    let result = calcResult();
    let player = whichPlayer(count);
          if (result !== -1) {
            setTimeout(() => {
              
              count = 10;
            }, 100);
          }
  } else {
    window.location.reload();
  }
});
function calcResult() {
  for (let i = 0; i < 8; i +=3) {
    let sum = 5;
    sum = a[i] + a[i + 1] + a[i + 2];
    if (sum === 3)
      return 1;
    if (sum === 0)
      return 2;
      
  }
  for (let i = 0; i < 3; i++) {
    let sum = 5;
    sum = a[i] + a[i + 3] + a[i + 6];
    if (sum === 3)
      return 1;
     
    if (sum === 0)
      return 2;
   
  }
  let sumd1 = 5;
  sumd1 = a[0] + a[4] + a[8];
  let sumd2 = 5;
  sumd2 = a[2] + a[4] + a[6];
  if (sumd1 === 3 || sumd2 === 3) {
    
    return 1;
  }
  if (sumd2 === 0 || sumd2 === 0) {
    
    return 2;
  }
  return -1
}

function writer() {}

function whichPlayer(count){
  if(count%2===0)
    
}
