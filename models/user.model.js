const db = require("../db/db");
const { genSaltSync, hashSync, compareSync } = require("bcrypt");

class userModel {
  // getAll() {
  //   return db("tutorials").orderBy("title", "desc");
  // }

  getByEmail(email) {
    const query = db("tutorial_users")
      .select("first_name", "last_name", "email", "password")
      .where("email", email);
    return query;
  }

  insertData(firstName, lastName, email, password) {
    const salt = genSaltSync(10);
    const passwd = hashSync(password, salt);
    const query = db("tutorial_users").insert({
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: passwd,
      created_at: db.fn.now(),
      updated_at: db.fn.now(),
    });
    // .returning("id");
    return query;
  }

  updateData(data, id) {
    const { firstName, lastName, email, password } = data;
    const query = db("tutorial_users")
      .update({
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
        updated_at: db.fn.now(),
      })
      .where("id", id);
    return query;
  }
}

module.exports = new userModel();
