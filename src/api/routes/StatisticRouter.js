const express = require("express");
const StatisticController = require("../controllers/StatisticController");
const { multer } = require("../middlewares");

const router = express.Router();

router.get("/", StatisticController.findAll);

module.exports = router;
