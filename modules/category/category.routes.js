const express = require("express");
const router = express.Router();
const categoryController = require("./category.controller");

router
  .route("/")
  .get(categoryController.getItemsController)
  .post(categoryController.postItemController);

router
  .route("/:id")
  .get(categoryController.getSingleItemController)
  .put(categoryController.putItemController)
  .delete(categoryController.deleteItemController);

module.exports = router;
