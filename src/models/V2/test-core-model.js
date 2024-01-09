const Level = require("./Level");
const Tag = require("./Tag");
const User = require("./User");

test(); // pour avoir une fonction "async"

async function test() {
  // === Méthode statiques ===
  const users = await User.findAll();
  console.log(users);

  const levels = await Level.findAll();
  console.log(levels);

  const tags = await Tag.findAll();
  console.log(tags);

  // === Méthode d'instance ===
  const user = new User({
    firstname: "John",
    lastname: "Doe",
    email: "john@doe.io",
    password: "123456789"
  });
  await user.insert();
  console.log(user);


  const pls = new Tag({ name: "Position Laterale de Securité" });
  await pls.insert();
  console.log(pls);

}
