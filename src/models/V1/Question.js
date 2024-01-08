const CoreModel = require("./CoreModel");

class Question extends CoreModel {
  description;
  wiki;
  anecdote;
  level_id;
  quiz_id;
  answer_id;

  constructor(obj) { // obj = { id, wiki, ... }
    super(obj); // On "appelle" le super()

    this.description = obj.description;
    this.wiki = obj.wiki;
    this.anecdote = obj.anecdote;
    this.level_id = obj.level_id;
    this.quiz_id = obj.quiz_id;
    this.answer_id = obj.answer_id;
  }
}

module.exports = Question;
