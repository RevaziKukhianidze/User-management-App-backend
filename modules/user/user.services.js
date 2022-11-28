const User = require("./entities/user.model");

exports.getSingleUser = async (requestBody) => {
  return User.findById(requestBody);
};

exports.getUsers = async (requestBody) => {
  return User.find(requestBody);
};

exports.createUser = async (requestBody) => {
  return User.create(requestBody);
};

exports.updateAgent = async (requestId, requestBody) => {
  return Agent.findByIdAndUpdate(requestId, {
    firstName: requestBody.firstName,
    lastName: requestBody.lastName,
    email: requestBody.email,
    idNumber: requestBody.idNumber,
    birthDate: requestBody.birthDate,
    category: requestBody.category,
    status: requestBody.status,
  });
};

exports.deleteAgent = async (requestId) => {
  return Agent.deleteOne({ _id: requestId });
};
