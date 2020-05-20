const express = require("express");

const app = express();

app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.json({
    msg: "Welcome to the ContactKeeper API",
  });
});

app.listen(PORT, () => {
  return console.log(`server started on port ${PORT}`);
});