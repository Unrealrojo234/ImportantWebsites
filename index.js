require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(cors());
app.use(express.json());

const dbString = process.env.DATABASE_CONNECTION_STRING;

const Websites = require("./models/website.js");

app.get("/", (req, res) => {
  res.send("<h1>Important Websites API</h1>");
});

//Posting data to the database
app.post("/cool", async (req, res) => {
  try {
    const websites = await Websites.create(req.body);
    res.status(200).json(websites);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Getting data from the database
app.get("/cool", async (req, res) => {
  try {
    const websites = await Websites.find({});
    res.status(200).json(websites);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

mongoose
  .connect(dbString)
  .then(() => {
    console.log("Server is successfully connected to the database");
  })
  .catch(() => {
    console.log("Server Failed to connect to the database");
  });
