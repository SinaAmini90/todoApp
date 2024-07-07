import {
  getTasksByUserId,
  getTaskById,
  createTask,
} from "../../models/todos/index.js";

function getUserTasksService(id) {
  const userTasks = getTasksByUserId(id);
  return userTasks;
}

function getTaskByIdService(id) {
  const task = getTaskById(id);
  return task;
}

function createTaskService(
  title,
  description,
  priority,
  reminder,
  category_id,
  deadline,
  user_id
) {
  const task = createTask(
    title,
    description,
    priority,
    reminder,
    category_id,
    deadline,
    user_id
  );
  return task;
}
export { getUserTasksService, getTaskByIdService, createTaskService };
