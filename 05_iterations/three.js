//for of

const arr = [1,2,3,4]

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello World!"

for (const greet of greetings) {
    if(greet == " ") continue
    console.log(greet);
}

const map = new Map()

map.set('a',1)
map.set('b',2)
map.set('c',3)

for (const val of map) {
    console.log(val);
    
}

for (const [key] of map) {
    console.log(key);
    
}
for (const [key,val] of map) {
    console.log(val);
    
}

const myObj = {
    'game1': "Fifa",
    'game2': "GTA"
}

// for (const [key,val] of myObj) {
//     console.log(key);
    
// } 
// for (const ele of myObj) {
//     console.log(ele);
// }
//not the way to iterate objects
