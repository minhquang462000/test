const UserService = require("../services/user.service");
const createUser = async (req, res) => {
  const doc = await UserService.createNewUser(req.body);
  return res.status(200).json(doc);
};
const getAllUserController = async (req, res) => {
  const doc = await UserService.getAllUserService();
  return res.status(200).json(doc);
};
const editUserbyId = async (req, res) => {
  const { id } = req.params;

  const data = req.body;
  const doc = await UserService.updateUser(data, id);
  return res.status(200).json(doc);
};
const deleteUserbyId = async (req, res) => {
  const { id } = req.params;
  const doc = await UserService.deleteUser(id);
  return res.status(200).json(doc);
};
const findOneUser = async (req, res) => {
  const { id } = req.params;
  const doc = await UserService.getOneUser(id);
  return res.status(200).json(doc);
};
module.exports = {
  createUser,
  getAllUserController,
  findOneUser,
  editUserbyId,
  deleteUserbyId,
};
