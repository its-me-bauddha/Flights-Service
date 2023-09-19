const express = require("express");

const { AirplaneController } = require("../../controllers");
const { AirplaneMiddlewares } = require("../../middlewares");

const router = express.Router();

// /api/v1/airplanes POST
router.post(
  "/",
  AirplaneMiddlewares.validateCreateRequest,
  AirplaneController.createAirplane
);
console.log("inside get ")
router.get("/", AirplaneController.getAirplanes);
router.get("/:id" ,AirplaneController.getAirplane);
router.delete('/:id',AirplaneController.destroyAirplane);
router.post('/:id',AirplaneController.updateAirplane);

module.exports = router;
 