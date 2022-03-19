/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("m_products", function (table) {
    table.increments("id");
    table.integer("product_category_id");
    table.string("name", 100).notNullable();
    table.boolean("status").notNullable().defaultTo(1);
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("m_products");
};
