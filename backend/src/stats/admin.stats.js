const express = require("express");
const Book = require("../book/book.model");
const Order = require("../orders/order.model");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    // Calculate the total book
    const totalProducts = await Book.estimatedDocumentCount();
    // Calculate the books are trending
    const trendingBooks = (await Book.find({ trending: true })).length;
    // Calculate the total order
    const totalOrders = await Order.estimatedDocumentCount();
    // Calculate the total price of books that ordered
    const totalOrder = await Order.find();
    const totalPrice = totalOrder
      .reduce((total, order) => {
        return total + order.totalPrice;
      }, 0)
      .toFixed(2);

    return res
      .status(200)
      .json({ totalProducts, trendingBooks, totalPrice, totalOrders });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
  // return the data: total products, total price, trending books,total orders
});

module.exports = router;
