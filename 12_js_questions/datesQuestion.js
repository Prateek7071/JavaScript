/*
## Minimum date
Instructions
Write a function minDate(dates) that takes an array of strings representing dates in the format "YYYY/MM/DD" and returns the earliest (minimum) date in the array.

Examples
In the first example, we are taking array of strings, the dates are: "2023/03/01", "2023/03/02", "2023/03/03", and we have to get the earliest date out of these, hence the output would be "2023/03/01"

minDate(["2023/03/01", "2023/03/02", "2023/03/03"]) // "2023/03/01"
In the second example, we are taking array of strings, the dates are: "2023/01/01", "2023/02/02", "2022/12/31", and we have to get the earliest date out of these, hence the output would be "2022/12/31"

minDate(["2023/01/01", "2023/02/02", "2022/12/31"]) // "2022/12/31"
Acceptance Criteria
The function should return a string representing the minimum date in the array.
The input array should not be modified.
Additional information to know:
Take care of the format of the dates, it should be YYYY/MM/DD
*/


// Approach 1
const date = ["2024/12/11", "2025/12/11", "2023/12/11"]
let arr = 0;
let date1 = []
while(arr<date.length){
  let nDate = new Date(date[arr])
  date1.push(nDate)
  arr++;
}
let minVal = date1[0].valueOf()

let arr2 = 0;
let flag = 0;
while(arr2<date1.length){
  if(date1[arr2].valueOf()<=minVal){
    minVal= date1[arr2].valueOf()
    flag = arr2;
  }
  arr2++;
}
console.log("method 1")
console.log(date[flag]);


//Approach 2, claude's Approach

const date3 = date.map( d => new Date(d)) //so d is the parameter (each individual date string as .map() loops through), and new Date(d) is what gets returned for each element
const minDate =new Date( Math.min(...date3) ) //the Math.min() returns numerical value of date so need to convert to date and minDate is the ans but in Date object

const minIndex = date3.findIndex(d=>d.getTime() === minDate.getTime())
console.log("method 2")
console.log(date[minIndex])


//Approach 3, lol
// const date = ["2024/12/11", "2025/12/11", "2023/12/11"]
const earliest = date.sort()[0]
console.log(earliest) // "2023/12/11"

//Approach 4
//const date = ["2024/12/11", "2025/12/11", "2023/12/11"]
let minDate4 = date[0]

for(let i = 1; i < date.length; i++) {
  if(new Date(date[i]) < new Date(minDate4)) {
    minDate4 = date[i]
  }
}
console.log(minDate4) // "2023/12/11"
