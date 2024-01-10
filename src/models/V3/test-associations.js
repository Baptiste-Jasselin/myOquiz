const { Question, Level, User, Quiz } = require("./associations");

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

  // Récupérer un User (et ses quizzes)
  const user = await User.findByPk(1, { include: "quizzes" });
  console.log(user.toJSON());

  // Récupérer les Quizzes (et leur author)
  const quizzes = await Quiz.findAll({ include: "author" });
  console.log(JSON.stringify(quizzes, null, 2));

  // Récupérer un quiz (et ses questions)
  const quiz = await Quiz.findOne({ include: "questions" });
  console.log(quiz.toJSON());

  // Récupérer une question (et le quiz duquel elle appartient)
  const firstQuestion = await Question.findByPk(1, { include: "quiz" });
  console.log(firstQuestion.toJSON());
}


// Note : faire des query complexes !
