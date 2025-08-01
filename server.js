require("dotenv").config();
const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const port = process.env.PORT || 3000;
const client = new MongoClient(process.env.MONGO_URI);

app.get("/", (req, res) => {
  res.send("GalaxyDoom backend online");
});

app.get("/ping", async (req, res) => {
  try {
    await client.connect();
    const db = client.db("Galaxydoom");
    res.send("MongoDB connected!");
  } catch (e) {
    res.status(500).send("MongoDB connection failed");
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
