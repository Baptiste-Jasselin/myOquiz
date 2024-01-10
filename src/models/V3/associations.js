const Level = require("./Level");
const Question = require("./Question");
const User = require("./User");
const Quiz = require("./Quiz");

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


// Question <-> Answer


// Quiz <-> Tag



// On ré-exporte toutes nos associations 
module.exports = { Question, Level, User, Quiz };
