const { Model } = require("objection")
const database = require("../database-connection")
Model.knex(database)

class Dog extends Model {
  static tableName = "dog"

  static get relationMappings(){
    return {
      owner: {
        relation: Model.BelongsToOneRelation,
        modelClass: require("./Person"),
        join: {
          from: "dog.owner_id",
          to: "person.id"
        },
      },
    }
  }
}

module.exports = Dog
