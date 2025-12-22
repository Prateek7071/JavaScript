/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  arr.map((e) => {
    if (e.profession === "developer") {
      console.log(
        `id : ${e.id}, Name : ${e.name}, Age : ${e.age}, Profession : ${e.profession}`,
      );
    }
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((e) => {
    if (e.profession === "developer") {
      console.log(
        `id : ${e.id}, Name : ${e.name}, Age : ${e.age}, Profession : ${e.profession}`,
      );
    }
  });
}

function addData() {
  //Write your code here, just console.log
  const emp = {
    id: 4,
    name: "susan",
    age: "20",
    profession: "intern",
  };
  if (!arr.find((e) => e.id === emp.id)) {
    //checking if id exist already
    arr.push(emp);
  }
  arr.map((e) =>
    console.log(
      `id : ${e.id}, Name : ${e.name}, Age : ${e.age}, Profession : ${e.profession}`,
    ),
  );
}

function removeAdmin() {
  //Write your code here, just console.log
  arr = arr.filter((e) => e.profession !== "admin");
  arr.map((e) =>
    console.log(
      `id : ${e.id}, Name : ${e.name}, Age : ${e.age}, Profession : ${e.profession}`,
    ),
  );
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr2 = [
    { id: 5, name: "johnny", age: "18", profession: "QA" },
    { id: 6, name: "Amber", age: "26", profession: "HR" },
    { id: 7, name: "Cbum", age: "29", profession: "VP" },
  ];
  arr = arr.concat(arr2);
  arr.map((e) =>
    console.log(
      `id : ${e.id}, Name : ${e.name}, Age : ${e.age}, Profession : ${e.profession}`,
    ),
  );
}
