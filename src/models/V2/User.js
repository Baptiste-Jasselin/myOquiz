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

  // Méthode d'instance (pas static === de classe)
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
}

module.exports = User;

// Note : essayer de faire un insert en statique pour voir !

