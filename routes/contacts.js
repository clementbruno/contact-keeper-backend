const express = require("express");
const router = express.Router();

// @route  get api/contacts
// @desc   Get all user's contacts
// @access Private
router.get("/", (req, res) => {
  res.send("Get all user's contacts");
});

// @route  post api/contacts
// @desc   Add new contact
// @access Private
router.post("/", (req, res) => {
  res.send("Add a contact");
});

// @route  put api/contacts/:id
// @desc   Update a contact
// @access Private
router.put("/:id", (req, res) => {
  res.send("Update a contact");
});

// @route  delete api/contacts/:id
// @desc   Delete a contact
// @access Private
router.delete("/:id", (req, res) => {
  res.send("Delete a contact");
});

module.exports = router;
