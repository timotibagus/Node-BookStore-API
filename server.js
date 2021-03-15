const express = require("express");
const bookRouter = require("./routes/book.route");
const storeRouter = require("./routes/store.route");
const invetoryRouter = require("./routes/inventory.route");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const port = 5000;

app.use("/books", bookRouter);
app.use("/store", storeRouter);
app.use("/inventory", invetoryRouter);

app.listen(port, () => console.log(`Server running on port ${port}`));
