const imgUploadService = require("../services/imgUploadUser.service");
const uploadRoute = (app) => {
  app.post("/api/upload/user/image", imgUploadService);
};

module.exports = uploadRoute;
