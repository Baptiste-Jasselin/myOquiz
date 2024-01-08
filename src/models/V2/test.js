const Level = require("./Level");

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


}

