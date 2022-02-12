const express = require("express");
const movieRouter = require("./movie/movie.router");

const api = express.Router();

api.use("/movies", movieRouter);

module.exports = api;
