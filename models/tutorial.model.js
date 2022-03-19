const db = require("../db");

class tutorialModel {
  getAll() {
    return db("tutorials").orderBy("title", "desc");
  }

  getById(id) {
    const query = db("tutorials")
      .select("title", "description", "published")
      .where("id", id);
    return query;
  }

  getAllPublished() {
    const query = db("tutorials")
      .select("title", "description", "published")
      .where("published", true);
    return query;
  }

  insertData(title, description, published) {
    const query = db("tutorials").insert({
      title: title,
      description: description,
      published: published,
      createdAt: db.fn.now(),
      updatedAt: db.fn.now(),
    });
    // .returning("id");
    return query;
  }

  updateData(data, id) {
    const { title, description, published } = data;
    const query = db("tutorials")
      .update({
        title: title,
        description: description,
        published: published,
        updatedAt: db.fn.now(),
      })
      .where("id", id);
    return query;
  }
}

module.exports = new tutorialModel();
