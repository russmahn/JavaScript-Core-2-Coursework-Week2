function listOfColours(colours) {
  // Write your code here...
  let content = document.querySelector("#content");
  let selectEl = document.createElement("select");
  content.appendChild(selectEl);
  
  let parEl = document.createElement("p");
  content.appendChild(parEl);

  for (let colour of colours) {
    let optionEl = document.createElement("option");
    optionEl.value = colour;
    optionEl.innerText = colour;
    selectEl.appendChild(optionEl);
    selectEl.addEventListener("click", selectColours);
    
    function selectColours() {
      parEl.innerText = `You have selected: ${selectEl.value}`;
      parEl.style.color = selectEl.value;
    }
  }
  content.appendChild(selectElement);
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
