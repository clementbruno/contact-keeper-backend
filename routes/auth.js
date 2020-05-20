const express = require("express");
const router = express.Router();

// @route  get api/auth
// @desc   Get logged in user
// @access Private
router.get("/", (req, res) => {
  res.send("Get logged in user");
});

// @route  post api/auth
// @desc   Authenticate user and get token
// @access Public
router.post("/", (req, res) => {
  res.send("Authenticate user and get token");
});

module.exports = router;
