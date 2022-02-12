const express = require("express");
const { httpGetMovieDetails } = require("./movie.controller");

const movieRoute = express.Router();

movieRoute.get("/:id", httpGetMovieDetails);

module.exports = movieRoute;
