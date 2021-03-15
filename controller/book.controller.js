const Book = require("../models").Book;
const Store = require("../models").Store;

module.exports = {
  async getBook(req, res) {
    try {
      const book = await Book.findAll();
      res.json(book);
    } catch (error) {
      res.json({ message: error.message });
    }
  },

  async getBookById(req, res) {
    try {
      const book = await Book.findByPk(req.params.id);
      res.json(book);
    } catch (error) {
      res.json({ message: error.message });
    }
  },

  async createBook(req, res) {
    const { title, author, year } = req.body;
    try {
      const book = await Book.create(
        {
          title,
          author,
          year,
        },
        {
          include: [
            {
              model: Store,
              as: "store",
            },
          ],
        }
      );
      res.json(book);
    } catch (error) {
      res.json({ message: error.message });
    }
  },

  async updateBook(req, res) {
    const { title, author, year } = req.body;
    try {
      const updateBook = await Book.update(
        { title, author, year },
        { where: { id: req.params.id } }
      );
      res.json({ message: "Data update" });
    } catch (error) {
      res.json({ message: error.message });
    }
  },

  async deleteBook(req, res) {
    try {
      const book = await Book.destroy({ where: { id: req.params.id } });
      res.json({ message: "Data Delete" });
    } catch (error) {
      res.json({ message: error.message });
    }
  },
};
