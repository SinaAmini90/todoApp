import { getTasksByUserId, getTaskById } from "../../models/todos/index.js";
function getUserTasksService(id) {
  const userTasks = getTasksByUserId(id);
  return userTasks;
}
function getTaskByIdService(id) {
  const task = getTaskById(id);
  return task;
}
export { getUserTasksService, getTaskByIdService };
