/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("tutorial_users", function (table) {
      table.increments("id");
      table.string("first_name", 255).notNullable();
      table.string("last_name", 255).notNullable();
      table.string("password", 255).notNullable();
      table.string("email").notNullable().unique;
      table.timestamps(true, true);
    })
    .createTable("tutorial_products", function (table) {
      table.increments("id");
      table.decimal("price").notNullable();
      table.string("name", 1000).notNullable();
      table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("tutorial_products").dropTable("tutorial_users");
};
