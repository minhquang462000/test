const authService = require("../services/auth.service");

const authLogincontroller = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await authService.loginService(email, password);
    return res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      message: e.message,
    });
    console.log(e);
  }
};
const getIdentity = async (req, res) => {
  try {
    const { email, _id } = req.user;
    const userLogin = await authService.getOneUserbyEmail(email);
    return res.status(200).json(userLogin);
  } catch (e) {
    res.status(500).json({
      message: e.message,
    });
    console.log(e);
  }
};
module.exports = {
  authLogincontroller,
  getIdentity,
};
