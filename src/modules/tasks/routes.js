import express from "express";
import {
  getTaskByUserIdController,
  getTaskByIdController,
  createTaskController,
  deleteTaskController,
} from "./controllers.js";
import { userIdValidator } from "../users/validations.js";
import { taskIdValidator } from "./validations.js";
const router = express.Router();

router.get("/api/tasks/user/:id", userIdValidator, getTaskByUserIdController);

router.get("/api/task/:id", taskIdValidator, getTaskByIdController);

router.post("/api/task", createTaskController);

router.delete("/api/task/:id", taskIdValidator, deleteTaskController); //the task should be users task && the task should be exist

// router.delete("/api/todoall", async (req, res) => {
//   try {
//     console.log("1");
//     await deleteAllTodos();

//     console.log("2");
//     res.status(201).json({
//       message: "todos delete successfully from database",
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// });

// router.put("/api/todo", async (req, res) => {
//   try {
//     const { id, title, description, is_completed } = req.body;
//     // console.log( id, title, description, is_completed );
//     await updateTodo(id, title, description, is_completed);
//     res.status(201).json({
//       message: "the todo update successfully in database",
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// });

// router.put("/api/todo/alltik", async (req, res) => {
//   try {
//     await markAllAsComplite();
//     res.status(201).json({
//       message: "the todo update successfully in database",
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// });

export { router };
