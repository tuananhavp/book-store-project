const express = require("express");
const router = express.Router();
const {
  createBook,
  getAllBooks,
  deleteABook,
  updateABook,
  getABook,
} = require("./book.controller");

router.post("/create", createBook);
router.delete("/delete/:id", deleteABook);
router.put("/update/:id", updateABook);
router.get("/:id", getABook);
router.get("", getAllBooks);

module.exports = router;
