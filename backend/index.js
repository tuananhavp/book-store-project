require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 3000;
console.log("Port: " + port);

// Middleware
app.use(express.json());

// Connect to MongoDB database
mongoose
  .connect(process.env.CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connect to MongoDB successfully"))
  .catch((err) => console.error("Failed to connect to MongoDB", err)); // Define a simple schema and model

// Books Router
const bookRouter = require("./src/book/book.route");
app.use("/", bookRouter);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
