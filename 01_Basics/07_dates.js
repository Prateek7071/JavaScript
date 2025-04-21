 // dates

 const myDate = new Date();
 console.log(myDate);
 console.log(myDate.toString());
 console.log(myDate.toDateString());
 console.log(myDate.toLocaleString());
 console.log(myDate.toJSON());
 console.log(typeof myDate);

 let myCreatedDate= new Date(2025,0,16,23,25); // month starts with 0 as 0=JANUARY;
 console.log(myCreatedDate.toLocaleString());

const myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime()); // timestamp in milliseconds 
console.log(Math.floor(Date.now()/1000)); // in seconds

let newDate = new Date();
console.log(newDate.getFullYear());
console.log(newDate.getMonth());   
console.log(newDate.getDate());
console.log(newDate.getDay()); // 0=Sunday, 1=Monday, 2=Tuesday, 3=Wednesday, 4=Thursday, 5=Friday, 6=Saturday
console.log(newDate.getHours());
console.log(newDate.getMinutes());
console.log(newDate.getSeconds());
console.log(newDate.getMilliseconds());

//can also uuse string interpolation
console.log(`Today's date is: ${newDate.getDate()}/${newDate.toLocaleString('defualt',{month : 'short' })}/${newDate.getFullYear()} `); 

console.log(newDate.toLocaleDateString('default',{
    timeZone: 'GMT'
}

));