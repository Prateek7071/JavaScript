//your JS code here. If required.
const abtn= document.getElementById('applause')
const bbtn= document.getElementById('boo')
const gbtn= document.getElementById('gasp')
const tbtn= document.getElementById('tada')
const vbtn= document.getElementById('victory')
const wbtn= document.getElementById('wrong')
const sbtn= document.getElementById('stop')

const audio = [
  applause,
  boo,
  gasp,
  tada,
  victory,
  wrong
]
let url

function playAudio(track){
  url = `./${track}`
  const audioBit = new Audio(url)
  audioBit.play()
}

function pauseAudio(){
  const audioBit = new Audio(url)
  audioBit.pause()
}

