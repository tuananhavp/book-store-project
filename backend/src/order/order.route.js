const express = require("express");
const { addOrder, getOrdersByEmail } = require("./order.controller");
const router = express.Router();

// Order routers

router.post("/", addOrder);
router.get("/:email", getOrdersByEmail);

module.exports = router;
