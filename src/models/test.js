const Tag = require("./Tag");
const Level = require("./Level");
const User = require("./User");


// ===== TAG ====
const cookingTag = new Tag({ id: 1, name: "Cuisine" }); // ==> instance en camelCase
console.log(cookingTag);

// ==== Level ===
const hardLevel = new Level({ id: 1, name: "Difficile" });
console.log(hardLevel);

const easyLevel = new Level({ id: 2, name: "Facile" });
console.log(easyLevel.name);

// ==== User ===

const chuck = new User({
  id: 1,
  firstname: "Chuck",
  lastname: "Norris",
  email: "chuck@oclock.io",
  password: "Po1ntFa1ble3Tr0pF0rt!"
});

console.log(chuck);
console.log(chuck.getFullName());
console.log(chuck.id); // GETTER (c'est une fonction, et grace au sucre syntaxique, c'est la même syntaxe que l'accès à une propriété)
console.log(chuck.email); // On aimerait bien pouvoir le lire depuis l'extérieur !


chuck.id = 42; // La propriété est PRIVEE ET il n'y a PAS de SETTER pour id ! Donc #id ne sera pas modifié !
console.log(chuck.id); // 1

// Ici, on a mis les propriétés en PRIVEE :
// - on y a donc pas accès depuis l'exterieur, ni en lecture ni en écriture

// On rajoute des GETTERS : 
// - on y a alors accès en LECTURE

// On rajoute des SETTERS : 
// - on y a alors accès en ECRITURE

// Mais on peut choisir QUEL ATTRIBUT mérite un SETTER/GETTER !


chuck.firstname = "CHUCK"; // On appelle le GETTER 
console.log(chuck.firstname); // CHUCK


chuck.password = "123456789"; // OK ! 
// chuck.password = "123"; // PAS OK ! // "Error: password should have more than 8 characters"
console.log(chuck.password);


// chuck.email = "toto"; // Error: Veuillez saisir un email valide.
// chuck.email = "@@@@"; // Error: Veuillez saisir un email valide.
chuck.email = "toto@oclock.io";
console.log(chuck.email);


