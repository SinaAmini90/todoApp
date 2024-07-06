import { query } from "../../core/database/database-handler.js";

async function getTasksByUserId(id) {
  const queryContext = "select * from public.tasks where user_id=$1";
  const result = await query(queryContext, [id]);
  return result.rows;
}

async function getTaskById(id) {
  const queryContext = "select * from public.todos where id=$1";
  const result = await query(queryContext, [id]);
  return result.rows;
}

// async function createTodo(title, description) {
//   const queryContext =
//     "insert into public.todos (title,description) values ($1,$2) RETURNING *";
//   const result = await query(queryContext, [title, description]);
//   return result.rows;
// }

// async function deleteTodo(id) {
//   const queryContext = "delete from public.todos where id=$1";
//   const result = await query(queryContext, [id]);
// }

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
  //   getTodoById,
  //   getTodos,
  //   deleteTodo,
  //   updateTodo,
  //   createTodo,
  //   deleteAllTodos,
  //   markAllAsComplite,
};
