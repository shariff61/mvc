const path = require("path");
const products = require("../models/products.models");

exports.getProducts = (req, res) => {
  res.sendFile(path.join(__dirname + "/../views/product.html"));
};

exports.saveProducts = (req, res) => {
  const name = req.body.name;
  const age = Number(req.body.age);
  const product = {
    name,
    age,
  };
  products.push(product);
  res.status(200).json({
    success: true,
    products,
  });
};
