const authController = require("../controllers/auth.controller");

const authRoute = (app) => {
  app.post("/api/auth/login", authController.authLogincontroller);
};
module.exports = authRoute;
