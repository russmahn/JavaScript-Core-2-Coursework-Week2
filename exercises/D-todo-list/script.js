function todoList(todos) {
  // Write your code here...
  todos.forEach((element) => {
    let content = document.querySelector("#content")
    let ulElTag = document.createElement("ul");
    content.appendChild(ulElTag);
    
    let liElTag = document.createElement("li");
    liElTag.innerText = element.todo;
    ulElTag.appendChild(liElTag);
    
    liElTag.addEventListener("click", clickLink);
    function clickLink(){
      if (liElTag.style.textDecoration === "line-through"){
        liElTag.style.textDecoration = "initial";
      }else{
        liElTag.style.textDecoration = "line-through";
      }
    }
  });
}

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);