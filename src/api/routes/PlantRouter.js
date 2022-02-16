const express = require("express");
const PlantController = require("../controllers/PlantController");
const { multer } = require("../middlewares");
const validateFile = require("../middlewares/validateFile");

const router = express.Router();

//FIND ALL
router.get("/", PlantController.findAll);


module.exports = router;
