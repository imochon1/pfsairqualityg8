const express = require("express");
const AuthController = require("../controllers/AuthController");
const { multer } = require("../middlewares");
const validateFile = require("../middlewares/validateFile");

const router = express.Router();

router.post("/", AuthController.login);

module.exports = router;
