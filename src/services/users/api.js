import {
  createUser,
  getUserById,
  updateUser,
} from "../../models/users/index.js";

function getUserByIdService(id) {
  const user = getUserById(id);
  return user;
}

function createUserService(
  username,
  firstname,
  lastname,
  phonenumber,
  email,
  password
) {
  const user = createUser(
    username,
    firstname,
    lastname,
    phonenumber,
    email,
    password
  );
  return user;
}

function updateUserService(
  id,
  username,
  firstname,
  lastname,
  phonenumber,
  email,
  password
) {
  updateUser(id, username, firstname, lastname, phonenumber, email, password);
}
export { getUserByIdService, createUserService, updateUserService };
