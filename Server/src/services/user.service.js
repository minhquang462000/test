const bcrypt = require("bcryptjs");
const db = require("../models/index");
const User = require("../models/user");
const { constant } = require("underscore");

const salt = bcrypt.genSaltSync(10);
const getAllUserService = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const datas = await db.User.findAll({
        raw: true,
        attributes: {
          exclude: ["password", "roleId"],
        },
      });
      resolve(datas);
    } catch (e) {
      reject(e);
    }
  });
};
const getOneUser = async (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await db.User.findOne({
        where: { id: id },
        raw: true,
        attributes: {
          exclude: ["password"],
        },
      });
      resolve(data);
    } catch (e) {
      reject(e);
    }
  });
};
const checkDuplicateEmail = async (email) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await db.User.findOne({ where: { email: email } });
      if (data) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (e) {
      reject(e);
    }
  });
};
const createNewUser = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const check = await checkDuplicateEmail(data.email);
      if (check) {
        resolve("email already exist");
        return;
      }
      const hashPasswordbycrypt = await hashPasswordUser(data.password);
      await db.User.create({
        email: data.email,
        password: hashPasswordbycrypt,
        firstName: data.firstName,
        lastName: data.lastName,
        phoneNumber: data.phoneNumber,
        address: data.address,
        image: data.image,
        gender: data.gender === "1" ? true : false,
        roleId: data.roleId,
      });
      resolve("create user ok");
    } catch (e) {
      reject(e);
    }
  });
};
const updateUser = async (data, id) => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.User.update(
        {
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
          phoneNumber: data.phoneNumber,
          address: data.address,
          image: data.image,
          gender: data.gender === "1" ? true : false,
        },
        {
          where: { id: id },
        }
      );
      resolve("update ok");
    } catch (e) {
      reject(e);
    }
  });
};
const deleteUser = async (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.User.destroy({ where: { id: id } });
      resolve("delete ok");
    } catch (e) {
      reject(e);
    }
  });
};
const hashPasswordUser = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      const hashPassword = await bcrypt.hashSync(password, salt);
      resolve(hashPassword);
    } catch (e) {
      reject(e);
    }
  });
};
module.exports = {
  createNewUser,
  getAllUserService,
  getOneUser,
  updateUser,
  deleteUser,
};
