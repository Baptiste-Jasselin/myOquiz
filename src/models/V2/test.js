const Level = require("./Level");
const User = require("./User");

main();

async function main() {
  // ===== LEVELS ====
  const easyLevel = new Level({ name: "Facile" });
  // console.log(easyLevel);

  // === Insert ===
  await easyLevel.insert(); // OK !
  // console.log(easyLevel);

  // === Delete ===
  const hardLevel = new Level({ name: "Super difficile" });
  await hardLevel.insert();
  await hardLevel.delete(); // Si il n'y a rien dans la BDD, cd'est qu'on a bien delete !

  // === Read n°1 - find by id ===
  const foundLevel = await Level.findById(8); // on veut chercher le level dont l'Id est 3
  // await foundLevel.delete(); // Pour tester !
  console.log(foundLevel);


  // === Read n°2 - find by name ===
  const expertLevel = await Level.findByName("Expert");
  console.log(expertLevel);

  // Read n°2 (bis) - find by name ne trouve rien !
  const notFoundLevel = await Level.findByName("Toto");
  console.log(notFoundLevel); // null


  // Read n°3 (bis) - findAll
  const levels = await Level.findAll();
  console.log(levels); // [ Level{}, Level{}, Level{}, Level{}]


  // === update===
  const moyenLevel = new Level({ name: "Moyen "});
  await moyenLevel.insert(); // Prépare le test, on créé un Level pour pouvoir le modifier ensuite

  moyenLevel.name = "Bof !";
  await moyenLevel.update(); // Cette méthode appelle la BDD è


  // ======================
  // ======= USER =========
  // ======================

  // CREATE - Méthode 1 - Méthode d'instance
  const harry = new User({
    firstname: "Harry",
    lastname: "Potter",
    email: "harry@hogwarts.io",
    password: "Gr1ff0ndor4Ever!"
  }); // Instancié
  await harry.insert(); // Inséré le user en BDD
  console.log(harry); // L'ID est bien recupéré également !


  // CREATE - Méthode 2 - Méthode de classe
  const hermione = await User.create({
    firstname: "Hermione",
    lastname: "Granger",
    email: "hermione@hogwarts.io",
    password: "It's leviooosaaaa"
  }); // D'abord inséré puis instancié, puis retourné !
  
  // await hermione.delete(); // OK !

  // UPDATE 
  hermione.email = "hermione.granger@hogwarts.io";
  hermione.password = "TenPointsForGrinf"; // Modifier l'AR
  await hermione.update(); // Persister la modification en base


  // Find By ID
  const user3 = await User.findById(3);
  console.log(user3);

  // Find By Email
  const chuck = await User.findByEmail("chuck@oclock.io");
  console.log(chuck); // { ... }
  const unexistingUser = await User.findByEmail("toto@oclock.io");
  console.log(unexistingUser); // null

  // FindAll
  
  const users = await User.findAll();
  console.log(users);

}

