const express = require("express");

const { CityController } = require("../../controllers");
const { CityMiddleWares } = require("../../middlewares")

const router = express.Router();

router.post(
  '/',
  CityMiddleWares.validateCreateRequest,
  CityController.createCity
);
router.delete('/:id',CityController.destroyCity);
router.get('/',CityController.getCities)
router.get('/:id',CityController.getCity)
router.put('/:id',CityController.updateCity)

module.exports = router;
