const bookController = require("../controller/book.controller");
const router = require("express").Router();

router.get("/", bookController.getBook);
router.get("/:id", bookController.getBookById);
router.post("/", bookController.createBook);
router.patch("/:id", bookController.updateBook);
router.delete("/:id", bookController.deleteBook);

module.exports = router;
