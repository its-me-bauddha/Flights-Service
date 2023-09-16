const { StatusCodes } = require("http-status-codes");
const { AirplaneService } = require("../services");
const { ErrorResponse, SuccessResponse } = require("../utils/common");

async function createAirplane(req, res) {
  try {
    const airplane = await AirplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
    //SuccessResponse.message = "successfully create an airplane ...";
    SuccessResponse.data = airplane;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    //ErrorResponse.message = "something went wrong while creating  an airplane ...";
    ErrorResponse.error = error;
    return res.status(error.statusCodes).json(ErrorResponse);
  }
}

module.exports = {
  createAirplane,
};
