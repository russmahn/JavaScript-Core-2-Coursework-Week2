let blueBtn = document.querySelector("#blueBtn");
let orangeBtn = document.querySelector("#orangeBtn");
let greenBtn = document.querySelector("#greenBtn");
let jumbotron = document.querySelector(".jumbotron");
let bikeBtn = document.querySelector(".btn.btn-primary.btn-lrg");
let volunteerBtn = document.querySelector(".btn.btn-secondary.btn-lrg");

// - When clicking **blue** it should change:
//   - **Jumbotron** background color to `#588fbd`
//   - **Donate a bike** button background color to `#ffa500`
//   - **Volunteer** button background color to `black` and text color to `white`

blueBtn.addEventListener("click", turnBlue);
function turnBlue (){
    jumbotron.style.backgroundColor = "#588fbd";
    bikeBtn.style.backgroundColor = "#ffa500";
    volunteerBtn.style.backgroundColor = "black";
    volunteerBtn.style.color = "white";
}

// - When clicking **orange** it should change:
//   - **Jumbotron** background color to `#f0ad4e`
//   - **Donate a bike** button background color to `#5751fd`
//   - **Volunteer** button background color to `#31b0d5` and text color to `white`

orangeBtn.addEventListener("click", turnOrange);
function turnOrange (){
    jumbotron.style.backgroundColor = "#f0ad4e";
    bikeBtn.style.backgroundColor = "black";
    volunteerBtn.style.backgroundColor = "#31b0d5";
    volunteerBtn.style.color = "white";
}

// - When clicking **green** it should change:
//   - **Jumbotron** background color to `#87ca8a`
//   - **Donate a bike** button background color to `black`
//   - **Volunteer** button background color to `#8c9c08`

greenBtn.addEventListener("click", turnGreen);
function turnGreen (){
    jumbotron.style.backgroundColor = "#87ca8a";
    bikeBtn.style.backgroundColor = "#5751fd";
    volunteerBtn.style.backgroundColor = "#8c9c08";
    volunteerBtn.style.color = "white";
}

// ## Part 2

let submitBtn = document.querySelector("form button");;

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();

  let textSpaces = document.querySelectorAll(".form-control");
  let wordValidator = true;

  if(!textSpaces[0].value.includes("@") || textSpaces[0].value.length === 0){
    textSpaces[0].style.backgroundColor = "red";
    wordValidator = false;
  } else {
    textSpaces[0].style.backgroundColor = "transparent";
  };

  for(i = 1; i < textSpaces.length; i++) {
    if(textSpaces[i].value.length === 0){
    textSpaces[i].style.backgroundColor = "red";
    wordValidator = false;

    } else {
    textSpaces[i].style.backgroundColor = "transparent";
    }
  };

  if(wordValidator) {
    textSpaces.forEach((field) => field.value = " ")

    alert("Thank you for contacting Bikes for Refugees; we will get in touch with you shortly.");
  };



})
