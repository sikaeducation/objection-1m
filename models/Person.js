const { Model } = require("objection")
const database = require("../database-connection")
Model.knex(database)

class Person extends Model {
  static tableName = "person"

  static get relationMappings(){
    return {
      dogs: {
        relation: Model.HasManyRelation,
        modelClass: require("./Dog"),
        join: {
          from: "person.id",
          to: "dog.owner_id",
        },
      },
    }
  }
}

module.exports = Person
