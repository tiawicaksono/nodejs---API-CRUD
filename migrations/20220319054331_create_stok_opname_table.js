/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("tbl_stock_opname", function (table) {
    table.increments("id");
    table.integer("distributor_products_id").notNullable();
    table.integer("quantity").notNullable().defaultTo(0);
    table.text("note").notNullable();
    table.date("recorded_date").notNullable().defaultTo(knex.fn.now());
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("tbl_stock_opname");
};
