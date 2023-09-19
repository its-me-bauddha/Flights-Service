const express = require("express");

const { CityController } = require("../../controllers");
const { CityMiddleWares } = require("../../middlewares")

const router = express.Router();

router.post(
  '/',
  CityMiddleWares.validateCreateRequest,
  CityController.createCity
);

module.exports = router;
