const Vehicule = require("./4.1.Vehicule");

const clio = new Vehicule(4, 50);

// clio.isStarted = true; // On aimerait interdire la modification de cette propriété depuis l'extérieur !
// clio.#isStarted = true // SyntaxError: Private field '#isStarted' must be declared in an enclosing class
clio.start(); // On est obligé de passer par la méthode start() pour démarrer la clio
console.log(clio.toString());


// clio.enginePower = "hello"; // On aimerait interdire ça !
// Solution => on rend la propriété enginePower PRIVEE et on rajoute 2 choses :
// - 1 getter : pour lire la valeur privée de puis l'exterieur
// - 1 setter : pour modifier la valeur privée depuis l'exterieur

// Interdit : clio.#enginePower = ...

clio.setEnginePower(60);
console.log(clio.getEnginePower()); // 60

// clio.setEnginePower("toto"); // throw new Error("power should be a number");
// clio.setEnginePower(-4); // throw new Error("power should positive");
