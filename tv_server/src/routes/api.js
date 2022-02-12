const express = require("express");
const routeByGenre = require("./movieByGenres/genres.router");
const genresRouter = require("./list_of_genres/genresType.router");
const searchRoute = require("./searchForMovie/search.router");
const movieRoute = require("./movieDetails/movie.router");

const api = express.Router();

api.use("/movies", routeByGenre);
api.use("/genres", genresRouter);
api.use("/search", searchRoute);
api.use("/movie", movieRoute);

module.exports = api;
