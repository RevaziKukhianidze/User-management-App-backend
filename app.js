const express = require("express");

const categoryRouter = require("./modules/category/category.routes");
const userRouter = require("./modules/user/user.routes");
const app = express();

if (process.env.NODE_ENV === "development ") {
  app.use(morgan("dev"));
}

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "false");
  res.header("Access-Control-Allow-Methods", "GET,PUT,PATCH,POST,DELETE");
  res.header("Access-Control-Expose-Headers", "Content-Length");
  res.header("Access-Control-Max-Age", "3600");
  res.header(
    "Access-Control-Allow-Headers",
    "Accept, Authorization, Content-Type, X-Requested-With, Range, utc-date"
  );
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  } else {
    return next();
  }
});

//routes

app.use("/api/v1/categories", categoryRouter);
app.use("/api/v1/users", userRouter);

module.exports = app;
