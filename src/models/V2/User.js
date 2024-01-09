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
}

module.exports = User;
