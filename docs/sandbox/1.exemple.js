// En JS, on sait faire des objets

const harry = {
  firstname: "Harry",
  lastname: "Potter",
  age: 10,
  sayHi() {
    console.log(`Bonjour, je m'appelle ${harry.firstname} ${harry.lastname} et j'ai ${harry.age} ans.`);
  }
};

console.log(harry);
harry.sayHi();

// Un deuxieme objet

const hermione = {
  firstname: "Hermione",
  lastname: "Granger",
  age: 11,
  sayHi() {
    console.log(`Bonjour, je m'appelle ${hermione.firstname} ${hermione.lastname} et j'ai ${hermione.age} ans.`);
  }
};

// Problème : on a deux fois la même fonction => 2 fonctions à maintenir ! Bof...
hermione.sayHi();


// Soluton 1 - Rajotuer une fonction

function sayHi(person) { // person = { firstname, lastname, age }
  console.log(`Bonjour, je m'appelle ${person.firstname} ${person.lastname} et j'ai ${person.age} ans.`);
}

sayHi(harry);
sayHi(hermione);
// Problème : on aimait bien la syntaxe "méthode" harry.sayHi() et hermione.sayHi()


// Solution 2 - la factory

function makePerson(firstname, lastname, age) { // Cette fonction est ce qu'on appelle une factory => un MOULE à fabriquer des sorciers
  return {
    firstname: firstname,
    lastname: lastname,
    age: age,
    sayHi: () => { console.log(`Bonjour, je m'appelle ${firstname} ${lastname} et j'ai ${age} ans.`); },
    castSpell: (spellName) => { console.log(`${spellName.toUpperCase()} !!!`); }
  };
}

const harry2 = makePerson("Harry", "Potter", 10); // On instancie une Person
const hermione2 = makePerson("Hermione", "Granger", 11); // On instancie une Person. Une instance = un exemple = un gateau

console.log(harry2);
console.log(hermione2);

harry2.sayHi();
hermione2.sayHi();
hermione2.castSpell("expelliarmus");

// Solution 2 - le "Design Pattern" Factory
// Parfois vous verez la solution 2 implémenter de la manière suivante (du sucre)

const PersonFactory = {
  make(firstname, lastname, age) {
    return {
      firstname: firstname,
      lastname: lastname,
      age: age,
      sayHi: () => { console.log(`Bonjour, je m'appelle ${firstname} ${lastname} et j'ai ${age} ans.`); },
    };
  }
};


const ron = PersonFactory.make("Ron", "Weasley", 10);
ron.sayHi();
