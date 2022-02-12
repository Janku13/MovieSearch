const axios = require("axios");
require("dotenv").config();
const API_KEY = process.env.API_KEY;

async function httpGetTypeOfGenres(req, res) {
  let url = `https://api.watchmode.com/v1/genres/?apiKey=${API_KEY}`;
  try {
    const data = await axios.get(url);
    const str = JSON.stringify(data.data);
    return res.send(str);
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error: "try later",
    });
  }
}

module.exports = {
  httpGetTypeOfGenres,
};
