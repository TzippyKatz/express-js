const express = require("express");
const app = express();
const booksRoutes = require("./routes/books");
const logger = require("./middleware/bookMiddleware");

app.use(express.json());


//Middleware
app.use(logger);

// Routes
app.use("/books", booksRoutes);

//PORT
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});