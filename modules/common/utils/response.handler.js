const { httpStrings } = require("../http.strings");

const okResponse = ({ res, data, count }) => {
  const httpCode = 200;
  return res.status(httpCode).json({
    data,
    statusCode: httpCode,
    count,
    message: httpStrings[httpCode],
  });
};

const createdResponse = ({ res, data }) => {
  const httpCode = 201;
  return res.status(httpCode).json({
    statusCode: httpCode,
    message: httpStrings[httpCode],
  });
};

const badRequestResponse = (res) => {
  const httpCode = 400;
  return res.status(httpCode).json({
    statusCode: httpCode,
    message: httpStrings[httpCode],
  });
};

const notFoundResponse = ({ res, type = null }) => {
  const httpCode = 404;

  if (type === "list") {
    return res.status(httpCode).json({
      statusCode: httpCode,
      message: httpStrings[httpCode],
      data: [],
    });
  }

  return res.status(httpCode).json({
    statusCode: httpCode,
    message: httpStrings[httpCode],
  });
};

const okResponseList = ({ res, data }) => {
  if (!data.length) {
    return notFoundResponse({ res, type: "list" });
  }
  const httpCode = 200;
  return res.status(httpCode).json({
    count: data.length,
    data,
    statusCode: httpCode,
    message: httpStrings[httpCode],
  });
};

const httpException = (res) => {
  const httpCode = 500;
  return res.status(httpCode).json({
    statusCode: httpCode,
    message: httpStrings[httpCode],
  });
};

module.exports = {
  okResponse,
  createdResponse,
  badRequestResponse,
  notFoundResponse,
  okResponseList,
  httpException,
};
