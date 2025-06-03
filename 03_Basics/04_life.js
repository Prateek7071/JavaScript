// Immediately Invoked Funtion Expression (IIFE)
// when we need some funciton say if we want my DB to get connected immidiately at the start or if I dont want to pollute my function from global variables we use this 

// syntax ()() , here first () represents the funtion defination second () is function execution 

// (function connector(){
//     console.log(`DB Connected`);
// })() 

// (function connector2(){
//     console.log(`DB Connected Two`);
// })()

// IF you write like this it will show error as it doesnt know where to stop the context so we need to manually end it using semi-colon


(function connector(){
    // this is called named IFEE as it has a name connector
    console.log(`DB Connected`);
})(); // cant even have a single gap in between () and ;

((name)=>console.log(`DB Connected Two ${name}`))("Sam") // can also write a arrrow funtion like this

