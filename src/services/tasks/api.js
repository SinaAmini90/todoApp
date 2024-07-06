import { getTasksByUserId } from "../../models/todos/index.js";
function getUserTasksService(id) {
  const userTasks = getTasksByUserId(id);
  return userTasks;
}
export { getUserTasksService };
