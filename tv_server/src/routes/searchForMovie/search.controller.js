const axios = require("axios");
require("dotenv").config();
const API_KEY = process.env.API_KEY;

async function httpSearchMovie(req, res) {
  const movie = req.params.id;
  let url = `https://api.watchmode.com/v1/search/?apiKey=${API_KEY}&search_field=name&search_value=${movie}`;
  try {
    const data = await axios.get(url);
    // console.log(data.data.title_results[0].id);
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
  httpSearchMovie,
};
