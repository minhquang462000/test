const express = require("express");
const bodyParser = require("body-parser");
const viewEngine = require("./configs/viewEngine");
const initRoute = require("./router/initRoute");
const connectDb = require("./configs/connectDB");
const cors = require("cors");
require("dotenv").config();

const app = express();
// config App
viewEngine(app);
//Middle Ware
app.use(
  cors({
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
initRoute(app);

connectDb();

const PORT = process.env.PORT || 8046;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
