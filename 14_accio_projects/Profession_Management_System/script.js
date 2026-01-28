const nameField = document.getElementById("name");
const professionField = document.getElementById("profession");
const ageField = document.getElementById("age");
const addBtn = document.getElementById("addBtn");
const divEmployee = document.getElementById("eList");
const empCount = document.getElementById("count");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const nameContent = nameField.value.trim();
  const professionContent = professionField.value.trim();
  const ageContent = ageField.value.trim();

  checkValidity(nameContent, professionContent, ageContent);
});

function checkValidity(nameContent, professionContent, ageContent) {
  if (nameContent === "" || professionContent === "" || ageContent === "") {
    displayFeedback("fail");
  } else {
    displayFeedback("pass");
    createEmp(nameContent, professionContent, ageContent);
  }
}

function displayFeedback(report) {
  const feedbackSpan = document.getElementById("feedbackMsg");
  if (report === "pass") {
    feedbackSpan.classList.add("success");
    feedbackSpan.textContent = "Success : Employee Added!";
    setTimeout(() => {
      ((feedbackSpan.textContent = ""),
        feedbackSpan.classList.remove("success"));
    }, 2000);
  } else {
    feedbackSpan.classList.add("fail");
    feedbackSpan.textContent =
      "Error : Please make sure All the filled before adding in an employee !";
    setTimeout(() => {
      ((feedbackSpan.textContent = ""), feedbackSpan.classList.remove("fail"));
    }, 2000);
  }
}

function employeeCount() {
  if (divEmployee.children.length > 0) {
    empCount.classList.add("hidden");
  } else {
    empCount.classList.remove("hidden");
  }
}

// ds to create employee array, add employee function
let count = 0;
let empListArr = [];
function createEmp(name, profession, age) {
  count++;

  const emp = {
    id: count,
    name: name,
    profession: profession,
    age: age,
  };
  empListArr.push(emp);
  addEmployee(count, name, profession, age);
  employeeCount();
}

function addEmployee(id, name, profession, age) {
  let para = document.createElement("p");
  para.innerHTML = `<div class="records" id="entry-${id}">
      <div class="record" name="empList">
      ${id}.&nbsp;&nbsp;&nbsp;&nbsp;
      Name: ${name}&nbsp;&nbsp;&nbsp;&nbsp;
      Profession: ${profession}&nbsp;&nbsp;&nbsp;&nbsp;
      Age: ${age}&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
      <button class ="delBtn" onClick=deleteEmployee(${id})>
        Delete User
      </button>
      </div>
    `;
  divEmployee.appendChild(para);
  console.log(empListArr);

  nameField.value = "";
  professionField.value = "";
  ageField.value = "";
}

function deleteEmployee(id) {
  empListArr = empListArr.filter((e) => e.id !== id);
  console.log(empListArr);
  document.getElementById(`entry-${id}`).classList.add("hidden");
}
