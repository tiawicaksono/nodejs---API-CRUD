/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("m_distributors").del();
  await knex("m_distributors").insert([
    { name: "WIRA`S CAFE", address: "KEDIRI", contact: "085755124535" },
  ]);
};
