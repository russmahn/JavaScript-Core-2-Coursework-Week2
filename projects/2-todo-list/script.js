function populateTodoList(todos) {
  let listEl = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  while (listEl.hasChildNodes()) {
    listEl.removeChild(listEl.lastChild);
  }
  
  for (let i = 0; i < todos.length; i++) {
    let liEl = document.createElement("li");
    liEl.className = "list-group-item d-flex justify-content-between align-items-center";

    let pEl = document.createElement("p");
    pEl.innerText = todos[i].task;

    let spanEl = document.createElement("span");
    spanEl.className = "badge bg-primary rounded-pill";
    let trashBtn = document.createElement("i");
    trashBtn.className = "fa fa-trash";
    let checkBtn = document.createElement("i");
    checkBtn.className = "fa fa-check";

    checkBtn.addEventListener("click", () => {
      if (liEl.style.textDecoration === "line-through") {
        todos[i].completed = false;
        liEl.style.textDecoration = "";
      } else {
        todos[i].completed = true;
        liEl.style.textDecoration = "line-through";
      }
    });

    trashBtn.addEventListener("click", () => {
      liEl.remove();
    });

    liEl.appendChild(pEl);
    spanEl.appendChild(checkBtn);
    spanEl.appendChild(trashBtn);
    liEl.appendChild(spanEl);
    listEl.appendChild(liEl);
  }
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  let inputEl = document.getElementById("todoInput");
  let newChores = inputEl.value;
  todos.push({ task: newChores, completed: false });
  populateTodoList(todos);
  inputEl.value = "";
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
