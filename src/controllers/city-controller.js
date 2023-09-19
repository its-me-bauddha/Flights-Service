const { StatusCodes } = require("http-status-codes");

const { CityService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");
const city = require("../models/city");

async function createCity(req, res) {
    try {
      const city = await CityService.createCity({
       name: req.body.name
      });
      SuccessResponse.data = city;
      return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
      ErrorResponse.error = error;
      return res.status(error.statusCode).json(ErrorResponse);
    }
  }
  async function destroyCity(req, res) {
    try {
      const city = await CityService.destroyCity(req.params.id);
      SuccessResponse.data = city;
      return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
      ErrorResponse.error = error;
      return res.status(error.statusCode).json(ErrorResponse);
    }
  }

  async function getCities(req, res) {
    try {
      const city= await CityService.getCities();
      SuccessResponse.data = city;
      return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
      ErrorResponse.error = error;
      return res.status(error.statusCode).json(ErrorResponse);
    }
  }

  async function getCity(req, res) {
    try {
      const city = await CityService.getCity(req.params.id);
      SuccessResponse.data = city;
      return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
      ErrorResponse.error = error;
      return res.status(error.statusCode).json(ErrorResponse);
    }
  }

  async function updateCity(req, res) {
    try {
      if (req.params.id) {
        const city = await CityService.updateCity({  
            name : req.body.name
        });
        SuccessResponse.data = city;
      }
  
      return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
      ErrorResponse.error = error;
      return res.status(error.statusCode).json(ErrorResponse);
    }
  }
  module.exports = {
    createCity,
    destroyCity,
    getCities,
    getCity,
    updateCity
  }