exports.seed = async knex => {
  await knex("dog").del()
  await knex("person").del()

  await knex("person").insert([{
    id: 1,
    name: "Kyle"
  },{
    id: 2,
    name: "Elyse"
  }])

  await knex("dog").insert([{
    id: 1,
    name: "Bixby",
    owner_id: 1,
  },{
    id: 2,
    name: "Mesa",
    owner_id: 2,
  },{
    id: 3,
    name: "Harmony",
    owner_id: 2,
  }])
}
