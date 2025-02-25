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
const orderRouter = require("./src/orders/order.route");
const adminRouter = require("./src/users/user.route");
const statsRouter = require("./src/stats/admin.stats");
app.use("/api/books/", bookRouter);
app.use("/api/orders/", orderRouter);
app.use("/api/admin", adminRouter);
app.use("/api/stats", statsRouter);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
