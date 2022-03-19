/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("m_distributors", function (table) {
    table.increments("id");
    table.string("name", 100).notNullable();
    table.text("address").notNullable();
    table.string("contact", 100).notNullable().defaultTo("-");
    table.boolean("status").notNullable().defaultTo(1);
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("m_distributors");
};
