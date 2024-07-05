import express from "express";
import {
  getTodos,
  getTodoById,
  createTodo,
  deleteTodo,
  updateTodo,
  markAllAsComplite,
  deleteAllTodos,
} from "../../model/todos/index.js";
const router = express.Router();

router.get("/api/todo", async (req, res) => {
  try {
    const todoList = await getTodos();
    res.json(todoList);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
});

router.get("/api/todo/:id", async (req, res) => {
  try {
    const todoId = req.params.id;
    const todo = await getTodoById(todoId);
    res.json(todo);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
});

router.post("/api/todo", async (req, res) => {
  try {
    const { title, description } = req.body;
    await createTodo(title, description);
    res.status(201).json({
      message: "the todo add successfully to database",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
});

router.delete("/api/todo/:id", async (req, res) => {
  try {
    const todoId = req.params.id;
    await deleteTodo(todoId);
    res.status(201).json({
      message: "the todo delete successfully from database",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
});

router.delete("/api/todoall", async (req, res) => {
  try {
    console.log("1");
    await deleteAllTodos();

    console.log("2");
    res.status(201).json({
      message: "todos delete successfully from database",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
});

router.put("/api/todo", async (req, res) => {
  try {
    const { id, title, description, is_completed } = req.body;
    // console.log( id, title, description, is_completed );
    await updateTodo(id, title, description, is_completed);
    res.status(201).json({
      message: "the todo update successfully in database",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
});

router.put("/api/todo/alltik", async (req, res) => {
  try {
    await markAllAsComplite();
    res.status(201).json({
      message: "the todo update successfully in database",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
});

export { router };
