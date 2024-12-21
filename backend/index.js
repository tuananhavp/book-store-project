require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

// Connect to MongoDB database
mongoose
  .connect(process.env.CONNECTION)
  .then(() => console.log("Connect to MongoDB successfully"))
  .catch((err) => console.error("Failed to connect to MongoDB", err)); // Define a simple schema and model

// Router
const bookRouter = require("./src/book/book.route");
const orderRouter = require("./src/order/order.route");
app.use("/api/books/", bookRouter);
app.use("/api/orders/", orderRouter);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
