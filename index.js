// requires

const express = require("express");
const path = require("path");
const axios = require("axios");
const cors = require("cors");
const dotenv = require("dotenv");
const players = require("./data.json");

// Configuration of dotenv
dotenv.config();

// Global variables
const app = express();

const port = process.env.PORT || 5849;

var config = {
  email: process.env.email,
  password: process.env.password,
};

var options = {
  method: "GET",
  headers: {
    Authorization: "Bearer ",
    "Content-Type": "application/json",
  },
};

// Middleware
app.use(cors({ origin: "*" }));

app.use(async (req, res, next) => {
  await axios
    .post("http://api.cup2022.ir/api/v1/user/login", config)
    .then((res) => {
      console.log(res.data);
      options.headers.Authorization = `Bearer ${res.data.data.token}`;
    })
    .catch((err) => {
      console.log(err);
    });
  next();
});

app.get("/", (req, res) => {
  res.send("API started........");
});

// For get all players
app.get("/wc22/players", (req, res) => {
  var playersData = [];
  players.forEach((player) => {
    playersData.push(player);
  });

  res.json(playersData);
});

// For get all players by country name
app.get("/wc22/players/:id", (req, res) => {
  var countryId = req.params.id;
  var playersData = [];
  players.forEach((player) => {
    if (player.nationality == countryId) {
      playersData.push(player);
    }
  });

  if (playersData[0]) {
    res.json(playersData);
  } else {
    res
      .status(404)
      .json({
        status: `can't find the Country with name ${countryId}`,
        fix: "Please check your country name It must start with capital letter",
        listOfCountries: [
          "England",
          "Australia",
          "Wales",
          "USA",
          "Morocco",
          "Qatar",
          "France",
          "Ghana",
          "Saudi Arabia",
          "Iran",
          "Uruguay",
          "Tunisia",
          "Ecuador",
          "Spain",
          "Argentina",
          "Serbia",
          "Brazil",
          "Denmark",
          "Senegal",
          "Mexico",
          "Ivory Coast",
          "Canada",
          "Belgium",
          "Cameroon",
          "Portugal",
          "Croatia",
          "Netherlands",
          "Guinea-Bissau",
          "Costa Rica",
          "Germany",
          "Japan",
          "Switzerland",
          "Poland",
          "South Korea",
          "Scotland",
          "Aruba",
        ],
      });
  }
});

// Get request of any id eg: match / team / standings
app.get("wc22/football/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const api_url = `http://api.cup2022.ir/api/v1/${id}/`;
    axios.get(api_url, options).then((data) => {
      res.json(data.data);
      res.end();
    });
  } catch (err) {
    res.status(404).json({ status: "Error" });
  }
});

// Get request of any id eg: match / team / standings by  Id eg : match ID / team ID / standings ID
app.get("/football/:id/:id2", async (req, res) => {
  const id = req.params.id;
  const id2 = req.params.id2;

  try{
    const api_url = `http://api.cup2022.ir/api/v1/${id}/${id2}`;
    axios.get(api_url, options).then((data) => {
      res.json(data.data);
      res.end();
    });
  } catch (err) {
    res.status(404).json({ status: "Error" });
  }

 
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
