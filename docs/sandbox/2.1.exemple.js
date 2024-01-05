// On refait notre fabrique à sorciers mais avec la POO (class)

// Convention : le nom de la classe est en PascalCase (avec une majuscule)
class Wizard { // Notre "factory", notre usine à fabriquer des Wizard

  // Attributs de ma classe (facultatif de les lister, mais bonne pratique)
  // On accède, au sein de la classe à ces attributs via le mot clé : 'this'
  firstname;
  lastname;
  age;

  // Le constructor est la fonction pour lancer la fabrication de l'objet
  constructor(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  }

  // Ajout d'une méthode d'instance
  sayHi() {
    // this = l'instance courante de la classe
    console.log(`Bonjour, je m'appelle ${this.firstname} ${this.lastname} et j'ai ${this.age} ans.`);
  }

  getBirthYear() {
    return 1997 - this.age;
  }
}


const harry = new Wizard("Harry", "Potter", 10); // On instancie un Wizard via le mot clé 'new'. Le mot clé 'new' est une façon d'appeller le 'constructor' de la classe
console.log(harry);
harry.sayHi(); // A cet appel là, this = harry

const hermione = new Wizard("Hermione", "Granger", 11); // Une instance de la classe 
hermione.sayHi(); // A cet appel là, this = hermione
console.log(hermione.lastname); // Granger ! Pourquoi on a pas appelé this ? => this : depuis l'intérieur de la classe

console.log(harry.getBirthYear());
console.log(hermione.getBirthYear());
