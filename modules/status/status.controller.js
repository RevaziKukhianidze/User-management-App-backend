const requestValidation = require("./status.requests.schema");
const statusService = require("./status.services");
const catchAsync = require("./../common/utils/catchAsync");
const {
  okResponse,
  badRequestResponse,
  okResponseList,
  httpException,
  notFoundResponse,
} = require("../common/utils/response.handler");

exports.getItemsController = catchAsync(async (req, res) => {
  const serviceResult = await statusService.getStatuses(req.params);
  if (serviceResult) {
    return okResponseList({ res, data: serviceResult });
  }
  return httpException(res);
});

exports.postItemController = catchAsync(async (req, res) => {
  const validate = requestValidation.statusSchema.validate(req.body);
  if (validate.error) {
    return badRequestResponse(res);
  }
  const serviceResult = await statusService.createStatus(validate.value);
  if (serviceResult) {
    return okResponse({ res, data: serviceResult });
  }
  return httpException(res);
});

exports.putItemController = catchAsync(async (req, res) => {
  const serviceResult = await statusService.updateStatus(
    req.params.id,
    req.body
  );
  if (serviceResult) {
    return okResponse({ res, data: serviceResult });
  }
  return badRequestResponse(res);
});

exports.deleteItemController = catchAsync(async (req, res) => {
  const serviceResult = await statusService.deleteStatus(req.params.id);

  if (serviceResult["deletedCount"] > 0) {
    return okResponse({ res, data: "" });
  }
  return badRequestResponse(res);
});
