const db = require("../../database/database-client");

class CoreModel {
  id;
  static tableName; // undefined

  constructor(obj) {
    this.id = obj.id;
  }

  // ==== Méthodes statiques ====
  static async findAll() {
    // console.log(this.tableName); // On réucupère le nom de la table : user
    // console.log(this); // Ceci est le CONSTRUCTEUR de la classe "fille" : dans une méthode STATIQUE => le this fait référence à la CLASSE plutôt qu'à l'instance !

    const result = await db.query(`SELECT * FROM "${this.tableName}"`);
    const rawEntities = result.rows; // [{}, {}, {}]
    const entities = rawEntities.map(rawEntity => new this(rawEntity)); // [Entity{}, Entity{}, Entity{}]
    return entities;
  }

}

module.exports = CoreModel;
