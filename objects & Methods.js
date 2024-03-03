 // Define an object representing a person
 let person = {
  name: "John",
  age: 25,
  // Define a method to greet the person
  greet: function () {
    alert("Hello, I am " + this.name + " and I am " + this.age + " years old.");
  }
};

// Function to call the greet method of the person object
function greetPerson() {
  person.greet();
}