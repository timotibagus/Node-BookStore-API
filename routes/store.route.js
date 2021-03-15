const storeController = require("../controller/store.controller");
const router = require("express").Router();

router.get("/", storeController.getStore);
router.post("/addbook", storeController.addBook);

module.exports = router;
