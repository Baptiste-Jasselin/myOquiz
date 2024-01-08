const Tag = require("./Tag");
const Level = require("./Level");


// ===== TAG ====
const cookingTag = new Tag({ id: 1, name: "Cuisine" });
console.log(cookingTag);

// ==== Level ===
const hardLevel = new Level({ id: 1, name: "Difficile" });
console.log(hardLevel);

const easyLevel = new Level({ id: 2, name: "Facile" });
console.log(easyLevel.name);