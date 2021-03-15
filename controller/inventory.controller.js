const Book = require("../models").Book;
const Store = require("../models").Store;

module.exports = {
  async getInvetoryByStore(req, res) {
    try {
      const inventory = await Store.findByPk(req.params.id, {
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
