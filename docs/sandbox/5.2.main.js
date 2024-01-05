const Vehicule = require("./5.1.Vehicule");

const clio = new Vehicule(4, 50);

console.log(clio.nbOfWheels); // On accède au getter (fonction, même si on est dirait pas !)

clio.nbOfWheels = 5; // ✅ On rajoute une roue à la clio en passant par le setter // On appelle une fonction set ....
console.log(clio.nbOfWheels); // 5

clio.nbOfWheels = -1; // ❌ Erreur !

