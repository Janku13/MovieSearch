const axios = require("axios");
require("dotenv").config();
const API_KEY = process.env.API_KEY;

async function httpGetMovieDetails(req, res) {
  const id = req.params.id;
  let url = `https://api.watchmode.com/v1/title/${id}/sources/?apiKey=${API_KEY}`;
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
  httpGetMovieDetails,
};
