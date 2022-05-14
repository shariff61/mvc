const path = require("path");
const hotels = require("../models/hotels.models");

exports.getHotels = (req, res) => {
  res.sendFile(path.join(__dirname + "/../views/hotels.html"));
};

exports.saveHotels = (req, res) => {
  const name = req.body.name;
  const place = req.body.place;
  const hotel = {
    name,
    place,
  };
  hotels.push(hotel);
  res.status(200).json({
    success: true,
    hotels,
  });
};
