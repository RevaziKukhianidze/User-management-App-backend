const express = require("express");
const router = express.Router();
const statusController = require("./status.controller");

router
  .route("/")
  .get(statusController.getItemsController)
  .post(statusController.postItemController);

router
  .route("/:id")
  .get(statusController.getSingleItemController)
  .put(statusController.putItemController)
  .delete(statusController.deleteItemController);

module.exports = router;
