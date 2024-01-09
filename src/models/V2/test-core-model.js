const Level = require("./Level");
const Tag = require("./Tag");
const User = require("./User");

test(); // pour avoir une fonction "async"

async function test() {
  const users = await User.findAll();
  console.log(users);

  const levels = await Level.findAll();
  console.log(levels);

  const tags = await Tag.findAll();
  console.log(tags);
}
