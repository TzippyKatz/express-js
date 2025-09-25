let books = require("../data/bookDB");
const { v4: uuidv4 } = require("uuid");

function getBooks(req, res) {
    res.json(books);
}

function getBookById(req, res) {
    const bookId = req.params.id;
    const book = books.find(b => b.id === bookId);
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json(book);
}

function addBook(req, res) {
    const { title } = req.body;

    if (!title) {
        return res.status(400).json({ message: "Title is required" });
    }
    const newBook = {
        id: uuidv4(),
        title
    };

    books.push(newBook);
    res.status(201).json(newBook);
}

function updateBook(req, res) {
    const bookId = req.params.id;
    const { title } = req.body;
    const book = books.find(b => b.id === bookId);
    if (!book) {
        return res.status(404).json({ message: "Book not found" });
    }
    book.title = title || book.title;
    res.json(book);
}

function deleteBook(req, res) {
    const bookId = req.params.id;
    const index = books.findIndex(b => b.id === bookId);
    if (index === -1) {
        return res.status(404).json({ message: "Book not found" });
    }
    books.splice(index, 1);
    res.json({ message: "book deleted" });
}

module.exports = {
    getBooks,
    getBookById,
    addBook,
    updateBook,
    deleteBook
};