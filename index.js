const inputBox = document.getElementById("input-box");
const taskList = document.getElementById("task-list");

// adding task in list
function addTask() {
  if (inputBox.value === "") {
    // checking empty input
    alert("First write something to add in To-Do List");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    taskList.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    saveData();
  }
  inputBox.value = "";
}

//checking and unchecking on list
taskList.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

//local Storage
function saveData() {
  localStorage.setItem("data", taskList.innerHTML);
}
function loadData() {
  taskList.innerHTML = localStorage.getItem("data");
}
loadData();
