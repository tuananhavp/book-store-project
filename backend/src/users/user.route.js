const express = require("express");
const { adminSignIn } = require("./user.controller");
const router = express.Router();

router.post("/", adminSignIn);

module.exports = router;
