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
  } catch (err) {
    console.log("Failed to save order", err);
    res.status(500).send({ message: "Failed to save order" }, err);
  }
};

module.exports = { addOrder };
