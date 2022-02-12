const express = require("express");
const { httpSearchMovie } = require("./search.controller");

const searchRoute = express.Router();

searchRoute.get("/:id", httpSearchMovie);

module.exports = searchRoute;
