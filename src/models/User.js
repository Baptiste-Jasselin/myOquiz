const validator = require("email-validator");

class User {
  // Propriété / Attributs (privés)
  #id;
  #firstname;
  #lastname;
  #email;
  #password;

  // Constructor
  constructor(obj) {
    this.#id = obj.id;
    this.#firstname = obj.firstname;
    this.#lastname = obj.lastname;
    this.#email = obj.email;
    this.#password = obj.password;
  }

  // Getters
  get id() { return this.#id; }
  get firstname() { return this.#firstname; }
  get lastname() { return this.#lastname; }
  get email() { return this.#email; }
  get password() { return this.#password; }

  // Setters
  set firstname(value) {
    this.#firstname = value;
  }

  set lastname(value) {
    this.#lastname = value;
  }

  set email(value) { // Vérifions que l'email est valide !
    // Méthode 0 : tester si il y a un '@' => bof
    // if (! value.includes("@")) { // Si pas de @
    //   throw new Error("Veuillez saisir un email valide.");
    // }

    // Méthode 1 : REGEX
    // const regex = /\w+@\w+\.\w{2,3}/; // entre deux '/'
    // if (! regex.test(value)) { // si value (nouveau email) match PAS bien la REGEX, c'est pas ok
    //   throw new Error("Veuillez saisir un email valide.");
    // }


    // Méthode 2 : un module NPM
    if (! validator.validate(value)) { // Si l'email n'est PAS validé par le validator
      throw new Error("Veuillez saisir un email valide."); // throw permet de "lever" l'erreur qu'on a définie, donc d'arrêter le programme avec cette erreur !
    }

    this.#email = value;
  }

  set password(value) {
    // Ajout d'une validation dans le setter !
    if (value.length < 8) { throw new Error("password should have more than 8 characters"); }

    this.#password = value;
  }

  // Intéret n°1 : on ne met pas de SETTER pour l' #id afin de ne pas laisser la possibilité de l'update !
  // Intéret n°2 : on peut rajouter de la validation

  
  // Méthode d'instance (publique)
  getFullName() {
    return `${this.#firstname} ${this.#lastname}`;
  }
}

module.exports = User;
