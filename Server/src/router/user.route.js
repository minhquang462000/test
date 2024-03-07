const userController = require("../controllers/user.controller");

const userRoute = (app) => {
  app.post("/api/users", userController.createUser);
  app.get("/api/users", userController.getAllUserController);
  app.get("/api/users/:id", userController.findOneUser);
  app.patch("/api/users/:id", userController.editUserbyId);
  app.delete("/api/users/:id", userController.deleteUserbyId);
};
module.exports = userRoute;
