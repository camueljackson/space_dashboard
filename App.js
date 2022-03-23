const express = require("express");
const app = express();

app.get("/webb-space-telescope", (req, res) => {
  res.json({ text: "hello!" });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
