const express = require("express");
const { httpGetMovie } = require("./movie.controller");

const movieRouter = express.Router();

movieRouter.get("/", httpGetMovie);

module.exports = movieRouter;
