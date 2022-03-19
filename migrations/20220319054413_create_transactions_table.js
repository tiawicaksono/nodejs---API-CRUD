/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("tbl_transactions", function (table) {
    table.increments("id");
    table.integer("daily_numerator").notNullable();
    table.increments("annual_numerator", { primaryKey: false });
    table.integer("customer_id").notNullable().defaultTo(0);
    table.float("sub_total_amount").notNullable().defaultTo(0);
    table.float("total_discount_per_item").notNullable().defaultTo(0);
    table.float("total_grand_discount").notNullable().defaultTo(0);
    table.float("total_amount").notNullable().defaultTo(0);
    table.integer("payment_type").notNullable().defaultTo(1);
    table.date("recorded_date").notNullable().defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("tbl_transactions");
};
