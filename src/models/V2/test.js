const Level = require("./Level");

main();

async function main() {
  // ===== LEVELS ====
  const easyLevel = new Level({ name: "Facile" });
  console.log(easyLevel);

  // === Insert ===
  await easyLevel.insert(); // OK !
  console.log(easyLevel);

  // === Delete ===
  const hardLevel = new Level({ name: "Super difficile" });
  await hardLevel.insert();
  await hardLevel.delete(); // Si il n'y a rien dans la BDD, cd'est qu'on a bien delete !

}
