# QCM 2

Le MCD indique `VOITURE <-- 1,1 --> Possède <-- 0,N --> GARAGE.` C'est une relation de type ?
- ❌ One-to-One
- ✅ One-to-Many
- ❌ Many-to-Many
- ❌ Voiture-to-Garage

---

Le mot clé `extends` permet : 
- ❌ d'instancier un élément d'une classe   ==> `new`
- ✅ d'hériter d'une classe
- ❌ de définir les attributs d'une classe ===> on les liste à l'intérieur de la classe 


```js
// ======= HUMAIN =======
class Humain {
	name;
	birthdate;

	constructor(name, birthdate) {
		this.name = name;
		this.birthdate = birthdate;
	}

	eat() {
		console.log(`${this.name} est en train de manger...`);
	}
}

const quentin = new Humain("Quentin Logie", "1970-01-01"); // On instancie un humain
quentin.eat(); // Depuis l'exterieur de la classe, on utilise pas 'THIS' // Cette ligne affichera `Quentin Logie est en train de ma manger`
// Note : à l'EXTERIEUR de la classe, (this === window) ou (this === global)


// ======= SUPER HERO =======
class Superhero extends Humain { // Un Superhero hérite des attributs et des méthodes d'un "Humain"
	superpowers;

	constructor(name, birthdate, superpowers) {
		super(name, birthdate);

		this.superpowers = superpowers;
	}

	attack() {
		console.log("Bim bam boom");
	}
}

const superman = new Superhero("Clark Kent", "1950", ["flights", "lazer eyes"]);
superman.eat(); // Superman est aussi un humain, donc il peut 'eat'
superman.attack();

// OPERATEUR 'instanceof'
quentin instanceof Humain // true
quentin instanceof Superhero // false
superman instanceof Humain // true
superman instanceof Superhero // true
```

---

La méthode `constructor` d'une classe `C` permet d'appeler :
- ✅ `new C();`
- ❌ `new C;`
- ❌ `C.constructor()`

---

`this` permet : 
- ❌ d'accéder à la classe depuis l'extérieur
- ❌ d'accéder à une instance de classe de puis l'extérieur de la classe 
- ✅ d'accéder à une instance de classe depuis l'intérieur de la classe

---

[Lire le code founi après la question.] Laquelle de ces instructions déclenche une erreur ?
- ❌ `hachiko.drink();` // hachiko est un Animal donc on a accès à la méthode drink();
- ❌ `hachiko.color = "grey";` // Animal.color est une propriété PUBLIQUE donc hachiko.color peut etre modifié depuis l'exterieur
- ❌ `garfield.eat();` // garfield est un Animal donc on a accès à la méthode eat();
- ✅ `garfield.bark();` // garfield est un Cat donc on n'a pas accès à la méthode bark() qui est chez les Dog


```js
class Animal {
	color;

	constructor(obj) {
		this.color = obj.color;
	}
	drink() {
		console.log("slurp slurp");
	}
	eat() {
		console.log("nom nom nom");
	}
}

class Dog extends Animal {
	constructor(obj) {
		super(obj);
	}

	bark() {
		console.log("waf waf");
	}
}

class Cat extends Animal {
	constructor(obj) {
		super(obj);
	}

	mew() {
		console.log("mew mew");
	}
}

const hachiko = new Dog({ color: "white" });
const garfield = new Cat({ color: "orange" });
```