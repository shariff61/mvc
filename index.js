const express = require("express");
const users = require("./router/users.router");
const products = require("./router/products.router");
const hotels = require("./router/hotels.router");
const app = express();
const PORT = 3000;
const localHost = "127.0.0.1";
// const importRouter = require("./router/users.router");

app.use(express.urlencoded({ extended: true }));
app.use(users);
app.use(products);
app.use(hotels);

app.use((req, res, next) => {
  res.status(404).json({
    message: "resource not found",
  });
});

app.listen(PORT, localHost, () => {
  console.log(`there is a server of: http://${localHost}:${PORT}`);
});
