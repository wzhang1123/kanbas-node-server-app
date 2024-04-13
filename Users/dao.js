import model from "./model.js";
export const createUser = (user) => model.create(user);
export const findAllUsers = () => model.find();
export const findUserByID = (userID) => model.findUserByID(userID);
export const findUserByUsername = (username) =>
  model.findOne({ userName: username });
export const findUserByCredentials = (username, password) =>
  model.findOne({ username, password });
export const updateUser = (userID, user) =>
  model.updateOne({ _id: userID }, { $set: user });
export const deleteUser = (userID) => model.deleteOne({ _id: userID });
