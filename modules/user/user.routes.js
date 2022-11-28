const express = require("express");
const router = express.Router();
const userController = require("./user.controller");

router
  .route("/")
  .get(userController.getItemsController)
  .post(userController.postItemController);

router
  .route("/:id")
  .get(userController.getSingleItemController)
  .put(userController.putItemController)
  .delete(userController.deleteItemController);

module.exports = router;
