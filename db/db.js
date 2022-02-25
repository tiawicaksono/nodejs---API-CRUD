const knex = require("knex");
// require("dotenv").config();
const knexfile = require("./knexfile");

const db = knex(knexfile.development);
// const db = knex({
//   client: "postgresql",
//   connection: {
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     database: process.env.DB_DATABASE,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//   },
//   pool: {
//     min: 2,
//     max: 10,
//   },
//   migrations: {
//     tableName: "knex_migrations",
//   },
// });
module.exports = db;
