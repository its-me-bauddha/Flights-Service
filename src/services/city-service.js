const { StatusCodes } = require("http-status-codes");
const { CityRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");


const cityRepository = new CityRepository();

async function createCity(data) {
    try {
      const city= await cityRepository.create(data);
      return city;
    } catch (error) {
        console.log(error);
      if (error.name == "SequelizeValidationError" || "SequelizeUniqueConstraintError") {
        let explanation = [];
        error.errors.forEach((err) => {
          explanation.push(err.message);
        });
        throw new AppError(explanation, StatusCodes.BAD_REQUEST);
      }
      throw new AppError(
        "Cannot create a new city object",
        StatusCodes.INTERNAL_SERVER_ERROR
      )
    }

}

async function destroyCity(id) {
    try {
      const response = await cityRepository.destroy(id);
      return response;
    } catch (error) {
      if (error.statusCode == StatusCodes.NOT_FOUND) {
        throw new AppError(
          "The City you requested to delete  is  not present",
          error.statusCode
        );
      }
      throw new AppError(
        "Cannot Fetch data of all the City",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }
  async function getCities() {
    try {
      const city = await cityRepository.getAll();
      return city;
    } catch (error) {
      throw new AppError(
        "Cannot Fetch data of all the Cities",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }
  async function getCity(id) {
    try {
      const city = await cityRepository.get(id);
      return city;
    } catch (error) {
      throw new AppError(
        "Cannot Fetch data of all the Cities",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

  async function updateCity(id,data) {
    try {
      const city = await cityRepository.update(id,data);
      return city;
    } catch (error) {
      throw new AppError(
        "Cannot Fetch data of all the Cities",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

  


  module.exports={
    createCity,
    destroyCity,
    getCities,
    getCity,
    updateCity,
  }