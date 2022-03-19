/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("rel_distributor_products", function (table) {
    table.increments("id");
    table.integer("distributor_id").notNullable();
    table.integer("product_id").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("rel_distributor_products");
};
