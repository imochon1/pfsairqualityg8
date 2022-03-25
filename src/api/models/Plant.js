const mongoose = require("mongoose");
const { Schema } = mongoose;

const PlantSchema = new Schema({
  name: String,
  descriptions: String,
  image: String,
  is_active: {
    type: Boolean,
    default: true,
  }
});


const Plant = mongoose.model("Plant", PlantSchema); // Plants

module.exports = Plant;
