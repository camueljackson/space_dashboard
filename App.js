const express = require("express");
const app = express();
const router = require("express").Router();
const got = require("got");
const { pipeline } = require("stream");

app.get("/webb-space-telescope", (req, res) => {});

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
