const express = require("express");
const router = require("./router/users.router");
const router1 = require("./router/products.router");
const app = express();
const PORT = 3000;
const localHost = "127.0.0.1";
// const importRouter = require("./router/users.router");

app.use(express.urlencoded({ extended: true }));
app.use(router);
app.use(router1);

app.use((req, res, next) => {
  res.status(404).json({
    message: "resource not found",
  });
});

app.listen(PORT, localHost, () => {
  console.log(`there is a server of: http://${localHost}:${PORT}`);
});
