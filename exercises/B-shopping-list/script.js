function shoppingList(arrayOfPeople) {
  // Write your code here...
  let content = document.querySelector("#content")
  for(let person of arrayOfPeople) {
    let ulTag = document.createElement("ul")
    let liTag = document.createElement("li")

    liTag.innerText = person

    ulTag.appendChild(liTag)
    content.appendChild(ulTag)
  }
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
