const Plant = require("../models/Plant");
const storage = require("../utils/storage");
const config = require("../config");

module.exports = {
  // key : value
  findAll: async (req, res) => {
    try {
      console.log("mongo_uri", process.env.MONGO_URI);
      console.log("mongo_uri", config.mongo_uri);
      
      const allActivePlants = await Plant.find({ is_active: true });
      res.status(200).json({ message: "All plants ", plants: allActivePlants });
    } catch (error) {
      res.status(400).json({
        message: "Error recover plants",
        error,
      });
    }
  },

  Create: async (req, res) => {
    try {
      console.log("req ===> ",req)
      console.log("req.body create plants= ", req.body)
      return res.json({})
    } catch (error) {
      res.status(400).json({
        message: "Error recover plants",
        error,
      });
    }
  }

};
