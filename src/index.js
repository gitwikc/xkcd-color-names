const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// The data
const { colors } = require("./data/xkcd.json");

/*
 * Only one route - Returns all the colors
 */
app.get("/", (req, res) => {
  res.send(colors);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Listening @ port ${PORT}`);
});
