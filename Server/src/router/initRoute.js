const userRoute = require("./user.route");
const authRoute = require("./auth.route");
const uploadRoute = require("./upload.route");
const initRoute = (app) => {
  // upload img
  uploadRoute(app);
  authRoute(app);
  userRoute(app);
};

module.exports = initRoute;
