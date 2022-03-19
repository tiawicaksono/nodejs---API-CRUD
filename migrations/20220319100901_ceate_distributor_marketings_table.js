/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("m_distributor_marketings", function (table) {
    table.increments("id");
    table.integer("distributor_id").notNullable();
    table.string("name", 100).notNullable();
    table.string("contact", 20).notNullable();
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("m_distributor_marketings");
};
