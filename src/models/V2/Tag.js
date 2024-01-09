const CoreModel = require("./CoreModel");

class Tag extends CoreModel{
  name;
  static tableName = "tag";

  constructor(obj) {
    super(obj);
    this.name = obj.name;
  }
}

module.exports = Tag;