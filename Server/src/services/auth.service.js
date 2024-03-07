const bcrypt = require("bcryptjs");
const db = require("../models/index");
const User = require("../models/user");

const loginService = async (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkEmailAlready = await getOneUserbyEmail(email);
      if (!checkEmailAlready) {
      throw new Error("Email not exist");
      }
      const userLogin = await db.User.findOne({
        where: { email: email },
        raw: true,
        attributes: ["password", "roleId", "email"],
      });
      if (userLogin) {
        const comparePassword = bcrypt.compareSync(password, userLogin.password);
        if (comparePassword) {
          delete userLogin.password;
          resolve(userLogin);
          console.log("Login successfully");
        } else {
         throw new Error("Wrong password");
        }
      } else {
        throw new Error("Email not exist");
      }
    } catch (e) {
      reject(e);
    }
  });
};
const getOneUserbyEmail = async (email) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await db.User.findOne({ where: { email: email } });
      if (user) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  loginService,
  getOneUserbyEmail,
};
