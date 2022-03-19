/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("tbl_purchase_orders", function (table) {
    table.increments("id");
    table.integer("distributor_products_id").notNullable();
    table.integer("quantity").notNullable().defaultTo(0);
    table.float("purchase_price").notNullable().defaultTo(0);
    table.float("selling_price").notNullable().defaultTo(0);
    table.text("barcode");
    table.date("order_date").notNullable().defaultTo(knex.fn.now());
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("tbl_purchase_orders");
};
