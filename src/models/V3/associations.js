const Level = require("./Level");
const Question = require("./Question");

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


// User <-> Quiz


// Quiz <-> Question


// Question <-> Answer


// Quiz <-> Tag



// On ré-exporte toutes nos associations 
module.exports = { Question, Level };
