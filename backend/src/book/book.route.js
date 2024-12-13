const express = require("express");
const router = express.Router();
const Book = require("./book.model");

router.post("/create", async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    const newBook = new Book({ ...data });
    await newBook.save();
    res.status(200).send({ message: "Book saved successfully", newBook });
  } catch (error) {
    console.log("Error creating book", error);
    res.status(500).send({ message: "Failed to saving book", error });
  }
});

module.exports = router;
