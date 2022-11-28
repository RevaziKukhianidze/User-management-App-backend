const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./app");

const conn = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose.connect(
  conn,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.error("mongo connection error");
      mongoConnErrorHandler(err);
      process.exit();
    }
  }
);

const port = parseInt(process.env.PORT) || 3600;
app.listen(port, () => {
  console.info(`App running on port ${port}...`);
});
