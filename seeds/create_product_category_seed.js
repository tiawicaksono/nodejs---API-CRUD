/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("m_product_categories").del();
  await knex("m_product_categories").insert([
    { name: "Foods" },
    { name: "Drinks" },
    { name: "Snack" },
    { name: "Packet" },
    { name: "Promo" },
  ]);
};
