const express = require("express");
const app = express();
const booksRoutes = require("./routes/books");

app.use(express.json());

// Routes
app.use("/books", booksRoutes);

//PORT
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});