const express = require("express");
const router = express.Router({ mergeParams: true });
const itemController = require("../controllers/itemControllers");
const authMiddleware = require("../middlewares/authMiddleware");

router.get("/", authMiddleware, itemController.getItems);
router.get("/:itemId", authMiddleware, itemController.getItemById);
router.post("/", authMiddleware, itemController.createItem);
router.put("/:itemId", authMiddleware, itemController.updateItem);
router.delete("/:itemId", authMiddleware, itemController.deleteItem);

module.exports = router;
