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

exports.updateUser = async (requestId, requestBody) => {
  return User.findByIdAndUpdate(requestId, {
    firstName: requestBody.firstName,
    lastName: requestBody.lastName,
    email: requestBody.email,
    idNumber: requestBody.idNumber,
    birthDate: requestBody.birthDate,
    category: requestBody.category,
    status: requestBody.status,
  });
};

exports.deleteUser = async (requestId) => {
  return User.deleteOne({ _id: requestId });
};
