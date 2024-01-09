const db = require("../../database.deprecated/database-client");

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

  // ==== Méthodes d'instance ====

  async insert() {
    // console.log(this.constructor.tableName); // Depuis l'instance, on accès à la classe via this.constructor

    const attributesNames = Object.keys(this).slice(1).map(element => `"${element}"`).join(", "); // ' "firstname", "lastname", "email", "password" '
    const attributesIndex = Object.keys(this).slice(1).map((element, index) => "$" + (index + 1)).join(", "); // '$1, $2, $3, $4'
    const attributesValues = Object.values(this).slice(1); // ["John", "Doe", "john@doe.io", "12345678"]

    // Obtention de attributesNames
    // console.log(this); // { id: undefined, firstname: 'John', lastname: 'Doe', email: 'john@doe.io', password: '123456789' }
    // console.log(Object.keys(this)); // ["id", "firstname", "lastname", "email", "password"]
    // console.log(Object.keys(this).slice(1)); // ["firstname", "lastname", "email", "password"]]
    // console.log(Object.keys(this).slice(1).map(element => `"${element}"`));  // [ '"firstname"', '"lastname"', '"email"', '"password"' ]
    // console.log(Object.keys(this).slice(1).map(element => `"${element}"`).join(", ")); // "firstname", "lastname", "email", "password"

    // Obtention de attributesIndex
    // console.log(Object.keys(this).slice(1)); // ["firstname", "lastname", "email", "password"]]
    // console.log(Object.keys(this).slice(1).map((element, index) => index)); // [0, 1, 2, 3]
    // console.log(Object.keys(this).slice(1).map((element, index) => index + 1)); // [1, 2, 3, 4]
    // console.log(Object.keys(this).slice(1).map((element, index) => "$" + (index + 1))); // [$1, $2, $3, $4]
    // console.log(Object.keys(this).slice(1).map((element, index) => "$" + (index + 1)).join(", ")); // "$1, $2, $3, $4"
    
    // Obtention de attributesValues
    // console.log(this); // { id: undefined, firstname: 'John', lastname: 'Doe', email: 'john@doe.io', password: '123456789' }
    // console.log(Object.values(this)); // [ undefined, 'John', 'Doe', 'john@doe.io', '123456789' ]
    // console.log(Object.values(this).slice(1)); [ 'John', 'Doe', 'john@doe.io', '123456789' ];

    const result = await db.query(`
      INSERT INTO "${this.constructor.tableName}" 
        (${attributesNames})
      VALUES
        (${attributesIndex})
      RETURNING 
        *
    `, attributesValues);

    // result = { rowCount, oid, rows: [{ id: 7 }]}
    const insertedId = result.rows[0].id;
    this.id = insertedId;
  }

}

module.exports = CoreModel;
