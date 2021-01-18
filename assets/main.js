const input = document.getElementById("input");
const todos = document.getElementById("todos");
const btn = document.getElementById("btn");
const done = document.querySelector(".done");

var userInput;

window.onload = () => (input.value = "");

function addItems() {
  userInput = input.value;
  if (userInput != "") {
    var todoItem = document.createElement("div");
    var doneBtn = document.createElement("button");
    doneBtn.innerText = "Done";
    doneBtn.classList.add("done--btn");
    todoItem.classList.add("todo--item");
    todoItem.innerHTML += `${userInput}`;
    todos.appendChild(todoItem);
    todoItem.appendChild(doneBtn);
    input.value = "";

    doneBtn.addEventListener("click", function () {
      todoItem.classList.add("finished-item");
      doneBtn.innerText = "Remove";
      doneBtn.classList.remove("done--btn");
      doneBtn.classList.add("remove--btn");

      if (doneBtn.innerText == "Remove") {
        doneBtn.onclick = () => {
          todos.removeChild(todoItem);
        };
      }
    });
  }
}

btn.onclick = () => {
  addItems();
};

input.addEventListener("keyup", enterEvent);

function enterEvent(e) {
  if (e.keyCode == 13) {
    addItems();
  }
}

