const movieList = document.getElementById("movie-list");
// movieList.style.backgroundColor = "red";
movieList.style["backgroundColor"] = "red";
movieList.style.display = "block";

const person = {
  "first name": "max",
  age: 17,
  hobbies: ["sports", "reading"],
  greet: () => {
    alert("hi there");
  },
  24: +"17",
};

delete person.age;
person.isAdmin = true;
console.log(person["first name"]);
console.log(person);
console.log(person[24]);
