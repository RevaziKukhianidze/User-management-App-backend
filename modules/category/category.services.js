const Category = require("./entities/category.model");

exports.getCategories = async (requestBody) => {
  return Category.find(requestBody);
};

exports.createCategory = async (requestBody) => {
  return Category.create(requestBody);
};

exports.updateCategory = async (requestId, requestBody) => {
  return Category.findByIdAndUpdate(requestId, {
    categoryName: requestBody.categoryName,
  });
};

exports.deleteCategory = async (requestId) => {
  return Category.deleteOne({ _id: requestId });
};
