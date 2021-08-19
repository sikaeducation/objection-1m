exports.up = async knex => {
  await knex.schema.createTable("person", table => {
    table.integer("id")
    table.string("name")
  })

  await knex.schema.createTable("dog", table => {
    table.integer("id")
    table.string("name")
    table.integer("owner_id").references("id").inTable("person")
  })
};

exports.down = async knex => {
  await knex.schema.dropTableIfExists("dog")
  await knex.schema.dropTableIfExists("person")
};
