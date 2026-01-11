  let numList =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function makeid(l) {
  // write your code here
  let res = "";
  for (let i = 0; i < l; i++) {
    res += numList.charAt(Math.floor(Math.random() * 62));
  }
  return res;
}

console.log(makeid(5));
console.log(numList.toUpperCase())