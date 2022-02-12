const express = require("express");
const { httpGetTypeOfGenres } = require("./genresType.controller");

const genresRouter = express.Router();

genresRouter.get("/", httpGetTypeOfGenres);

module.exports = genresRouter;
