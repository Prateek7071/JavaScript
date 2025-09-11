//generate a random color
let intervalId
const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = "#"
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color;
}

console.log(randomColor());

const changeColor = function(){
    document.body.style.backgroundColor = randomColor()
}
document.querySelector('#start').addEventListener('click', function(){
    if(!intervalId){
        intervalId = setInterval(changeColor,1000)
    }

    // so here if the check for !intervalId is not present it present a unique problem
    // i.e., if pressed start multiple times the value of intervalId changes to the present one,
    //hence the previous id of setInterval which are still running is lost
    //so when stop is pressed the very present setInterval will be stopped 
    //and all the previous ones will still be running breaking the system.
    //So its always important to check, this is also happenening because we are setting intervalId to null.
    // it would work fine if we dont set intervalId to null but its a good practice.
})

document.querySelector('#stop').addEventListener('click', function(){
    clearInterval(intervalId)
    intervalId = null; //this is a good practice
})