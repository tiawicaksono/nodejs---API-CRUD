/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("tbl_detail_transactions", function (table) {
    table.increments("id");
    table.integer("distributor_products_id").notNullable();
    table.integer("daily_numerator").notNullable();
    table.integer("annual_numerator").notNullable();
    table.integer("quantity").notNullable().defaultTo(0);
    table.float("discount_per_item").notNullable().defaultTo(0);
    table.date("recorded_date").notNullable().defaultTo(knex.fn.now());
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("tbl_detail_transactions");
};
