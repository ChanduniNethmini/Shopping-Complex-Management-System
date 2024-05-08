const express = require("express");
const router = express.Router();
const { generateToken } = require("../controller/paymentgate");

// Route for generating Braintree token
router.get("/generate/token", generateToken);

module.exports = router;
