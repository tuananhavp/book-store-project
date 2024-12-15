const Book = require("./book.model");

// Create a new book
const createBook = async (req, res) => {
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
};

// Get a single book
const getABook = (req, res) => {
  const bookId = req.params.id;
  Book.findById(bookId)
    .exec()
    .then((book) => {
      if (!book) {
        return res.status(404).send({ message: "Book not found" });
      } else {
        res
          .status(200)
          .send({ message: "You retrieved the book successfully", book });
      }
    })
    .catch((error) => {
      console.log("Error getting book", error);
      res.status(500).send({ message: "Failed to get book", error });
    });
};

// Get all books
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find({});

    if (!books) {
      return res.status(404).send({ message: "No books found" });
    } else {
      return res
        .status(200)
        .send({ message: "You get all books sucessfully", books });
    }
  } catch (error) {
    console.log("Error getting all books", error);
    res.status(500).send({ message: "Failed to get all books", error });
  }
};

// Delete a book
const deleteABook = async (req, res) => {
  try {
    const bookId = req.params.id;
    const book = await Book.findByIdAndDelete(bookId);
    console.log(book);
    if (!book) {
      return res.status(404).send({ message: "Book not found" });
    } else {
      res.status(200).send({ message: "Book deleted successfully", book });
    }
  } catch (error) {
    console.log("Failed to delete a book", error);
    res.status(500).send({ message: "Failed to delete a book", error });
  }
};

// Update a book
const updateABook = async (req, res) => {
  try {
    const bookId = req.params.id;
    const data = req.body;
    const updatedBook = await Book.findByIdAndUpdate(
      bookId,
      { ...data },
      { new: true }
    );
    console.log(updatedBook);
    if (!updatedBook) {
      res.status(404).send({ message: "Book not found", error });
    } else {
      res.status(200).send({ message: "Book updated", updatedBook });
    }
  } catch (error) {
    console.log("Failed to update a book", error);
    res.status(500).send({ message: "Failed to update a book", error });
  }
};

module.exports = {
  createBook,
  getAllBooks,
  deleteABook,
  updateABook,
  getABook,
};
