const mongoose = require("mongoose");
const { Schema } = mongoose;

const PlantSchema = new Schema({
    name: String, // short hand
    last_name: {
      type: String,
      required: true,
    },
    is_active: {
        type: Boolean,
        default: true,
      },
});


const Plant = mongoose.model("Plant", PlantSchema); // Plant

module.exports = Plant;
