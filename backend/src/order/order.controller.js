const Order = require("./order.model");

const addOrder = async (req, res) => {
  try {
    const order = new Order(req.body);
    const newOrder = await order.save();
    if (newOrder) {
      res.status(200).send(newOrder);
    } else {
      res.status(400).send({ message: "Failed to save order" });
    }
  } catch (error) {
    console.log("Failed to save order", error);
    res.status(500).send({ message: "Failed to save order" }, error);
  }
};

const getOrdersByEmail = async (req, res) => {
  try {
    const email = req.params.email;
    const orders = await Order.find({ email });
    console.log(email);
    if (!orders) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json(orders);
  } catch (error) {
    console.log("Failed to get all orders", error);
    res.status(500).send({ message: "Failed to get all orders" }, error);
  }
};

module.exports = { addOrder, getOrdersByEmail };
