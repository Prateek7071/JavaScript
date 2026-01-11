// const list  = "tiwariprattek@gmail.com"

// const regex = "/^\w+([.-]\w+)*@\w+([.-]\w+)*\.\w{2,3}$/"
// if(list.match(regex)!==null)
// console.log('true')
// else
// console.log('false')
function cutter(str) {
  if (str.length === 0) return str;
  else {
    str = str.trim().split(" ");
    return str[0]
  }
}
let str1 = "hello world";
let str2 = " hello world";
let str3 = "helloworld";
let str4 = "";
console.log(cutter(str1));
console.log(cutter(str2));
console.log(cutter(str3));
console.log(cutter(str4));
