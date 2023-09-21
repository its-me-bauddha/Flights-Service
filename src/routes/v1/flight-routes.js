const express = require("express");

const { FlightController} = require("../../controllers");
const { FlightMiddlewares} = require("../../middlewares");

const router = express.Router();

// /api/v1/airplanes POST
router.post(
  "/",
   FlightMiddlewares.validateCreateRequest,
  FlightController.createFlight
);
router.get('/',FlightController.getAllFlights)
router.get('/:id',FlightController.getFlight)


// router.get("/", AirportController.getAirports);
// router.get("/:id", AirportController.getAirport);
// router.delete("/:id", AirportController.destroyAirport);
// router.patch("/:id", AirportController.updateAirport);

module.exports = router;
