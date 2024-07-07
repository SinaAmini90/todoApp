import { getUserById } from "../../models/users/index.js";

function getUserByIdService(id) {
  const user = getUserById(id);
  return user;
}
export { getUserByIdService };
