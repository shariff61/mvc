const express = require("express");
const { getHotels, saveHotels } = require("../controllers/hotels.controller");
const router = express.Router();

router.get("/hotels", getHotels);

router.post("/hotels", saveHotels);
module.exports = router;
