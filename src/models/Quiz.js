class Quiz {
  id;
  title;
  description;
  author_id;

  constructor(obj) {
    this.id = obj.id;
    this.title = obj.title;
    this.description = obj.description;
    this.author_id = obj.author_id;
  }
}

module.exports = Quiz;
