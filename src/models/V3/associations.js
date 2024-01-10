const Level = require("./Level");
const Question = require("./Question");
const User = require("./User");
const Quiz = require("./Quiz");
const Answer = require("./Answer");

// Sequelize : 
// - One-To-One : hasOne + belongsTo
// - One-To-Many : hasMany + belongsTo
// - Many-To-Many : belongsToMany + belongsToMany


// Level <-> Question (One-to-Many)
Question.belongsTo(Level, {
  foreignKey: "level_id", // Préciser le nom de la clé étrangère
  as: "level" // (alias) au choix : quand on requête une question, je veux pouvoir récupérer son "level"
});

Level.hasMany(Question, {
  foreignKey: "level_id",
  as: "questions" // quand on requête un level, je veux pouvoir récupérer les "questions" associées au level
});

// User <-> Quiz (One-To-Many)
User.hasMany(Quiz, {
  foreignKey: "author_id",
  as: "quizzes" // quand je requête un User, je veux également "ses quizzes"
});

Quiz.belongsTo(User, {
  foreignKey: "author_id",
  as: "author" // quand je requête un Quiz, je veux "son author"
});


// Quiz <-> Question (One-To-Many)
Quiz.hasMany(Question, {
  foreignKey: "quiz_id",
  as: "questions"
});
Question.belongsTo(Quiz, {
  foreignKey: "quiz_id",
  as: "quiz"
});


// Question <-> Answer (One-To-Many)
// une question a plusieurs propositions. Une proposition appartient à une et une seule question.
Question.hasMany(Answer, {
  foreignKey: "question_id",
  as: "propositions" // par ex !
});
Answer.belongsTo(Question, {
  foreignKey: "question_id",
  as: "question"
});

// Question <-> Answer (One-To-One)
// Une question a une et une seule bonne réponse. La bonne réponse répond à une et une seule question
// hasOne + belongsTo
Answer.hasOne(Question, {
  foreignKey: "answer_id",
  as: "question_it_answers" // "à partir d'une BONNE réponse, je veux récupérer la QUESTION AUQUELLE ELLE REPONDS BIEN (question_it_answers)"
});
Question.belongsTo(Answer, {
  foreignKey: "answer_id",
  as: "good_answer" // Quand je recupère une question, je veux inclure sa "good_answer"
});

// Quiz <-> Tag



// On ré-exporte toutes nos associations 
module.exports = { Question, Level, User, Quiz, Answer };
