import { query } from "../../core/database/database-handler.js";

async function getUsers() {
  const queryContext = "select * from public.users";
  const result = await query(queryContext);
  return result.rows;
}

async function getUserById(id) {
  const queryContext = "select * from public.users where id=$1";
  const result = await query(queryContext, [id]);
  return result.rows;
}

async function createUser(title, description) {
  const queryContext =
    "insert into public.users (title,description) values ($1,$2) RETURNING *";
  const result = await query(queryContext, [title, description]);
  return result.rows;
}

async function deleteUser(id) {
  const queryContext = "delete from public.users where id=$1";
  const result = await query(queryContext, [id]);
}

async function deleteAllUsers() {
  const queryContext = "delete from public.users";
  const result = await query(queryContext, []);
}

async function updateUser(id, title, description, isComplited) {
  const queryContext = `UPDATE public.users SET title =$2,  description =$3, is_completed =$4  WHERE id =$1 RETURNING *; `;
  const result = await query(queryContext, [
    id,
    title,
    description,
    isComplited,
  ]);
  return result.rows;
}

async function markAllAsComplite() {
  const queryContext = "UPDATE public.users set is_completed=$1  RETURNING *";
  const result = await query(queryContext, [true]);
  return result.rows;
}

export {
  getUserById,
  getUsers,
  deleteUser,
  updateUser,
  createUser,
  deleteAllUsers,
  markAllAsComplite,
};
