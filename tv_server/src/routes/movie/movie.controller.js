const axios = require("axios");
require("dotenv").config();
const API_KEY = process.env.API_KEY;

// let url = `https://api.watchmode.com/v1/genres/?apiKey=${API_KEY}`;
// let url = `https://api.watchmode.com/v1/search/?apiKey=${API_KEY}&search_field=imdb_id&search_value=nm7903892`;
let url = `https://api.watchmode.com/v1/title/1114888/sources/?apiKey=${API_KEY}`;
async function httpGetMovie(req, res) {
  try {
    const data = await axios.get(url);
    const str = JSON.stringify(data.data);
    return res.send(str);
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error: "try again later",
    });
  }
}

module.exports = {
  httpGetMovie,
};
