const express = require("express");
const router = express.Router();
const {
  createBook,
  getAllBooks,
  deleteABook,
  updateABook,
  getABook,
} = require("./book.controller");
const { verifyToken } = require("../middleware/verifyAdminToken");

router.post("/create", verifyToken, createBook);
router.delete("/delete/:id", verifyToken, deleteABook);
router.put("/update/:id", verifyToken, updateABook);
router.get("/:id", getABook);
router.get("/", getAllBooks);

module.exports = router;
