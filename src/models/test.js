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