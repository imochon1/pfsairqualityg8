const mongoose = require("mongoose");
const { Schema } = mongoose;

// Se definen aqui los campos de nuesra tabla (Collection)
const UserSchema = new Schema({
  name: {
    type: String
  }, // short hand
  last_name: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  role: {
    type: String,
    default: "USER",
    enum: ["ADMIN", "USER", "INVITE"],
  },
  is_active: {
    type: Boolean,
    default: true,
  },
});

const User = mongoose.model("User", UserSchema); // users

module.exports = User;

/**
 * Bajo nivel: Driver => MONGO
 *
 * Medio nivel: Query Builder KNEX SQL
 *
 * Alto nivel:
 *          ORM (Sequelize) SQL
 *          ODM Object document mapping (Mongoose) No SQL
 */
