const express = require("express");
const ProductRoutes = require("./routes/product.route");
const app = express();

/* A middleware that parses the body of the request and makes it available in the req.body object. */
app.use(express.json());

/* Root route: checks if the route is running. */
app.get("/", (req, res) => {
  res.status(200).json({ alive: "True" });
});

/* Telling the server to use the routes in the Product Routes object */
app.use("/api", ProductRoutes);

module.exports = app;