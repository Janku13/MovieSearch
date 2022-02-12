const express = require("express");
const routeByGenre = require("./movie/genres.router");
const genresRouter = require("./list_of_genres/genresType.router");

const api = express.Router();

api.use("/movies", routeByGenre);
api.use("/genres", genresRouter);

module.exports = api;
