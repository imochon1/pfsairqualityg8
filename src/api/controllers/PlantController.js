const Plant = require("../models/Plant");
const storage = require("../utils/storage");

module.exports = {
  // key : value
  findAll: async (req, res) => {
    try {
      const allActivePlants = await Plant.find({ is_active: true });
      res.status(200).json({ message: "All plants ", plants: allActivePlants });
    } catch (error) {
      res.status(400).json({
        message: "Error recover plants",
        error,
      });
    }
  },

};
