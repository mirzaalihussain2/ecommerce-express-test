const mongoose = require("mongoose");
const app = require("./app");
const PORT = process.env.PORT || 5000;

require("dotenv").config();

/* Connecting to the DB and then starting the server */
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(PORT, console.log(`Server started on port ${PORT}`));
  })
  .catch((err) => {
    console.log(err);
  });