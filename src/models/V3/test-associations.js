const { Question, Level } = require("./associations");

main();

async function main() {
  // Récupérer une Question (et son Level associé)
  const question = await Question.findByPk(1, { include: "level" });
  console.log(question.toJSON());

  // Récupérer un Level (et ses Question associées)
  const level = await Level.findOne({
    where: { name: "Expert" },
    include: "questions"
  });
  console.log(level.toJSON());

}
