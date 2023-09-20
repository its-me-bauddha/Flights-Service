const express = require("express");
const router = express.Router();
const { InfoController } = require("../../controllers");

const airplaneRoutes = require("./airplane-routes");
const airportRoutes = require("./airport-routes");
const flightRoutes = require("./flight-routes");

const cityRoutes = require("./city-routes");

router.use("/airplanes", airplaneRoutes);
router.use("/airports", airportRoutes);
router.use("/flights", flightRoutes);

router.get("/info", InfoController.info);
router.use("/cities", cityRoutes);

module.exports = router;
