// for in
// by default for in loop outputs key oppose to for of loop, in for off loop it outputs values
const myObj ={
    js : 'Javascript',
    cpp: 'C plus plus',
    rb: 'Ruby'
}
for (const key in myObj) {
    console.log(myObj[key]);
}


for (const key in myObj) {
    if(myObj[key] === 'Ruby')
        continue
    console.log(myObj[key]);
}


// For arrays
console.log("--------------------------------");

const myArr = [1,2,3,4,5,6,7,8]

for (const key in myArr) {
    console.log(myArr[key]);
}
for (const key in myArr) {
    console.log(`The value of ${key} is ${myArr[key]}`);
}

// const map = new Map()
// map.set('IN', 'India') 
// map.set('US', 'United States')
// map.set('UK', 'United Kingdom')
// for (const key in map) {
//     console.log(key);
// }
// This will not work as expected, since Map is not iterable with for-in, because for-in is meant for objects, not Maps.
// And in Maps the key is not the index, it is the key of the map and is stored in a different way.
//in objects, the key is the index, but in Maps, the key is the key of the map.
// So, to iterate over a Map, you should use for-of or forEach method.