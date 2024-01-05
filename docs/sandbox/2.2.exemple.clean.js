
class Wizard {
  firstname;
  lastname;
  age;

  constructor(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  }

  sayHi() {
    console.log(`Bonjour, je m'appelle ${this.firstname} ${this.lastname} et j'ai ${this.age} ans.`);
  }
}


const harry = new Wizard("Harry", "Potter", 10);
const hermione = new Wizard("Hermione", "Granger", 11);

harry.sayHi();
console.log(hermione.lastname);

