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

}

module.exports = User;

