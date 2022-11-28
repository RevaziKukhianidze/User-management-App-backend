const requestValidation = require("./category.requests.schema");
const categoryService = require("./category.services");
const catchAsync = require("./../common/utils/catchAsync");
const {
  okResponse,
  badRequestResponse,
  okResponseList,
  httpException,
  notFoundResponse,
} = require("../common/utils/response.handler");

exports.getSingleItemController = catchAsync(async (req, res) => {
  const validate = requestValidation.categorySchema.validate(req.params);
  if (validate.error) {
    return badRequestResponse(res);
  }
  const serviceResult = await categoryService.getSingleCategory(req.params.id);
  if (serviceResult) {
    return okResponse({ res, data: serviceResult });
  }
  return notFoundResponse(res);
});

exports.getItemsController = catchAsync(async (req, res) => {
  const serviceResult = await categoryService.getCategories(req.params);
  if (serviceResult) {
    return okResponseList({ res, data: serviceResult });
  }
  return httpException(res);
});

exports.postItemController = catchAsync(async (req, res) => {
  const validate = requestValidation.categorySchema.validate(req.body);
  if (validate.error) {
    return badRequestResponse(res);
  }
  const serviceResult = await categoryService.createCategory(validate.value);
  if (serviceResult) {
    return okResponse({ res, data: serviceResult });
  }
  return httpException(res);
});

exports.putItemController = catchAsync(async (req, res) => {
  const serviceResult = await categoryService.updateCategory(
    req.params.id,
    req.body
  );
  if (serviceResult) {
    return okResponse({ res, data: serviceResult });
  }
  return badRequestResponse(res);
});

exports.deleteItemController = catchAsync(async (req, res, next) => {
  const serviceResult = await categoryService.deleteCategory(req.params.id);

  if (serviceResult["deletedCount"] > 0) {
    return okResponse({ res, data: "" });
  }
  return badRequestResponse(res);
});
