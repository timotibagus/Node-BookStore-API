const Book = require("../models").Book;
const Store = require("../models").Store;

module.exports = {
  async getStore(req, res) {
    try {
      const store = await Store.findAll();
      res.json(store);
    } catch (error) {
      res.json({ message: error.message });
    }
  },
  async addBook(req, res) {
    const { store_id, book_id } = req.body;
    try {
      let books;
      if (Array.isArray(book_id)) {
        books = [];
        book_id.forEach(async (id) => {
          const book = await Book.findByPk(id);
          console.log(book);
          books.push(book);
        });
      } else {
        books = await Book.findByPk(book_id);
      }

      const store = await Store.findByPk(store_id);

      await store.addBooks(books);
      const inventory = await Store.findByPk(store_id, {
        include: [
          {
            model: Book,
            as: "books",
            attributes: ["id", "title"],
          },
        ],
      });

      res.json(inventory);
    } catch (error) {
      res.json({ message: error.message });
    }
  },
};
