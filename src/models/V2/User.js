const db = require("../../database/database-client");

class User {
  id;
  firstname;
  lastname;
  email;
  password;

  constructor(obj) {
    this.id = obj.id;
    this.firstname = obj.firstname;
    this.lastname = obj.lastname;
    this.email = obj.email;
    this.password = obj.password;
  }

  // ===== Méthodes d'instance ======
  
  async insert() {
    const result = await db.query(`
      INSERT INTO "user" 
        ("firstname", "lastname", "email", "password")
      VALUES
        ($1, $2, $3, $4)
      RETURNING 
        *
    `, [
      this.firstname,
      this.lastname,
      this.email,
      this.password
    ]);

    // result = { rowCount, oid, rows: [{ id: 7, email: "", password: "", ... }]}
    const insertedId = result.rows[0].id;
    this.id = insertedId;
  }

  async delete() {
    try {

      const result = await db.query(`DELETE FROM "user" WHERE id = $1`, [this.id]);
      return result.rowCount > 0; // Si supérieur à 0, vaut true, sinon vaut false (à la place du if/else)

    } catch (error) {
      console.error(error);
      return false; // On renvoie false pour dire que l'insertion s'est mal passé !
    }
  }

  async update() {
    const query = `
      UPDATE 
        "user"
      SET 
        "firstname" = $2,
        "lastname" = $3,
        "email" = $4,
        "password" = $5
      WHERE 
        "id" = $1
    `;
    const values = [
      this.id,
      this.firstname,
      this.lastname,
      this.email,
      this.password
    ];
    
    const result = await db.query(query, values);
    return result.rowCount > 0;
  }

  // ===== Méthodes statiques ======

  // Equivalent de la méthode "insert()" mais en "static" (pour voir, parce qu'on a posé la question)
  static async create(obj) {
    const result = await db.query(`
    INSERT INTO "user" 
    ("firstname", "lastname", "email", "password")
    VALUES
    ($1, $2, $3, $4)
    RETURNING 
    *
    `, [
      obj.firstname,
      obj.lastname,
      obj.email,
      obj.password
    ]);
    
    const rawUser = result.rows[0]; // { id, firstname, lastname, email, password }
    return new User(rawUser);

    // En réutilisant la méthode précédente : 
    // const user = new User(obj);
    // await user.insert(); // Note, synchronise avec la BDD + ajoute l'ID
    // return user;
  }

  static async findById(researchId) {
    const query = `SELECT * FROM "user" WHERE id = $1`;
    const values = [researchId];
    const result = await db.query(query, values); // { rows: [{ ... }]}    OU    { rows: [] }

    const rawUser = result.rows[0]; // { id, firstname, lastname, email, password }   OU   undefined
    if (! rawUser) { return null; } 

    return new User(rawUser);
  }

  static async findByEmail(researchedEmail) {
    const query = `SELECT * FROM "user" WHERE "email" = $1`;
    const values = [researchedEmail];
    const result = await db.query(query, values); // { rows: [{ ... }]}    OU    { rows: [] }

    const rawUser = result.rows[0]; // { id, firstname, lastname, email, password }   OU   undefined
    if (! rawUser) { return null; } 

    return new User(rawUser);
  }

  static async findAll() {
    const result = await db.query(`SELECT * FROM "user"`);

    const rawUsers = result.rows; // [{}, {}, {}]
    const users = rawUsers.map(rawUser => new User(rawUser)); // [User{}, User{}, User{}]
    return users;
  }

}

module.exports = User;
