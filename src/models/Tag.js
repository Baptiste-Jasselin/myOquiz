const CoreModel = require("./CoreModel");

class Tag extends CoreModel {
  name;

  constructor(obj) { // obj = { id, name }
    super(obj);
    this.name = obj.name;
  }
}

module.exports = Tag;
