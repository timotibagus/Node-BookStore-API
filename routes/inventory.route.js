const inventoryController = require("../controller/inventory.controller");
const router = require("express").Router();

router.get("/:id", inventoryController.getInvetoryByStore);

module.exports = router;
