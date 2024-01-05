// On aimerait coder la "fabrique à Tag" => la classe Tag

class Tag {
  id;
  name;

  constructor(obj) { // obj = { id, name }
    this.id = obj.id;
    this.name = obj.name;
  }
}

module.exports = Tag;
