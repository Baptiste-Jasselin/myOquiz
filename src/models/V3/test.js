const Level = require("./Level");

test();

async function test() {
  const levels = await Level.findAll();
  console.log(levels); // [Level{}, Level{}, Level{}]

  console.log(levels[0].id);
  console.log(levels[0].name);
}