const Tag = require("./Tag");

const cookingTag = new Tag({ id: 1, name: "Cuisine" });

console.log(cookingTag);

// cookingTag.save(); // Et paf ! ca fait la requête SQL pour insérer dans la BDD !
// Objectif lundi : remplacer le dataMapper avec des "CLASSE" qui accède à la BDD 
// => c'est le design pattern "Active Record"

