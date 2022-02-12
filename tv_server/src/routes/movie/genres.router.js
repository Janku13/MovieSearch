const express = require("express");
const { httpGetMovieByGenres } = require("./genres.controller");

const routeByGenre = express.Router();

routeByGenre.get("/:id", httpGetMovieByGenres);

module.exports = routeByGenre;
