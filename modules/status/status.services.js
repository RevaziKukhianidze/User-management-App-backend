const Status = require("./entities/status.model");

exports.getSingleStatus = async (requestBody) => {
  return Status.findById(requestBody);
};

exports.getStatuses = async (requestBody) => {
  return Status.find(requestBody);
};

exports.createStatus = async (requestBody) => {
  return Status.create(requestBody);
};

exports.updateStatus = async (requestId, requestBody) => {
  return Status.findByIdAndUpdate(requestId, {
    statusName: requestBody.statusName,
  });
};

exports.deleteStatus = async (requestId) => {
  return Status.deleteOne({ _id: requestId });
};
