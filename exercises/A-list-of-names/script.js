function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");
  for (let person of arrayOfPeople) {
    let h1Tag = document.createElement("h1");//creating h1 tag
    let h2Tag = document.createElement("h2");//creating h2 tag

    h1Tag.innerText = person.name;//saying (innerText=put inside h1 tag) people.name = Chris....
    h2Tag.innerText = person.job;//saying (innerText=put inside h2 tag) people.name = Teacher....

    content.appendChild(h1Tag);//(content=the div).(appendChild(h1Tag)=take the h1Tag and put it under the div tag)
    content.appendChild(h2Tag);//(content=the div).(appendChild(h1Tag)=take the h2Tag and put it under the div tag)
  }
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
