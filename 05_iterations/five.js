// for each in arrays

const codingLanguages = ['JavaScript', 'Python', 'Ruby', 'Java', 'C++']

codingLanguages.forEach(function (item){
    console.log(item);
})

codingLanguages.forEach((val)=>{
    console.log(val);
    
})

function printMe(item){
    console.log(item);
    
}
codingLanguages.forEach(printMe) //by giving reference of the above function

// we also have access to other entitites
console.log("-----------------------------------------------------------------");

codingLanguages.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})

const myApps =[
    {
        Facebook: "Blue",
        Snapchat: "Yellow",
    },
    {
        Facebook: "Social",
        Snapchat: "Social"
    }
]

myApps.forEach((value)=>{
    console.log(value.Facebook);
    
})