import { query } from "../../core/database/database-handler.js";

async function getTasksByUserId(id) {
  const queryContext = "select * from public.tasks where user_id=$1";
  const result = await query(queryContext, [id]);
  return result.rows;
}

async function getTaskById(id) {
  const queryContext = "select * from public.tasks where id=$1";
  const result = await query(queryContext, [id]);
  return result.rows;
}

async function createTask(
  title,
  description,
  priority,
  reminder,
  category_id,
  deadline,
  user_id
) {
  const queryContext =
    "insert into public.tasks (title, description, priority, reminder, category_id, deadline, user_id) values ($1,$2,$3,$4,$5,$6,$7) RETURNING *";
  const result = await query(queryContext, [
    title,
    description,
    priority,
    reminder,
    category_id,
    deadline,
    user_id,
  ]);
  return result.rows;
}

async function deleteTask(id) {
  const queryContext = "delete from public.tasks where id=$1";
  const result = await query(queryContext, [id]);
  return result;
}

// async function deleteAllTodos() {
//   const queryContext = "delete from public.todos";
//   const result = await query(queryContext, []);
// }

// async function updateTodo(id, title, description, isComplited) {
//   const queryContext = `UPDATE public.todos SET title =$2,  description =$3, is_completed =$4  WHERE id =$1 RETURNING *; `;
//   const result = await query(queryContext, [
//     id,
//     title,
//     description,
//     isComplited,
//   ]);
//   return result.rows;
// }

// async function markAllAsComplite() {
//   const queryContext = "UPDATE public.todos set is_completed=$1  RETURNING *";
//   const result = await query(queryContext, [true]);
//   return result.rows;
// }

export {
  getTasksByUserId,
  getTaskById,
  deleteTask,
  //   updateTodo,
  createTask,
  //   deleteAllTodos,
  //   markAllAsComplite,
};
