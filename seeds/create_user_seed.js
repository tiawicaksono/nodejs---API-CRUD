/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const { genSaltSync, hashSync } = require("bcrypt");
exports.seed = async function (knex) {
  const salt = genSaltSync(10);
  const passwd = hashSync("a", salt);
  // Deletes ALL existing entries
  await knex("m_users").del();
  await knex("m_users").insert([
    {
      first_name: "TIA",
      last_name: "WICAKSONO",
      username: "tiawicaksono",
      password: passwd,
    },
    {
      first_name: "ARUM",
      last_name: "PUSPITA PURBASARI",
      username: "arumpuspita",
      password: passwd,
    },
    {
      first_name: "AHMAD",
      last_name: "BAGUS WIRATMOYO",
      username: "ahmadbagus",
      password: passwd,
    },
    {
      first_name: "ADHIKARA",
      last_name: "KEN WIRATAMA",
      username: "adhikara",
      password: passwd,
    },
  ]);
};
