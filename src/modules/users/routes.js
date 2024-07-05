import express from "express";
import {
  getusers,
  getuserById,
  createuser,
  deleteuser,
  updateuser,
  markAllAsComplite,
  deleteAllusers,
} from "../../model/users/index.js";
const router = express.Router();

router.get("/api/user", async (req, res) => {
  try {
    const userList = await getUsers();
    res.json(userList);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
});

router.get("/api/user/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await getuserById(userId);
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
});

router.post("/api/user", async (req, res) => {
  try {
    const { title, description } = req.body;
    await createUser(title, description);
    res.status(201).json({
      message: "the user add successfully to database",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
});

router.delete("/api/user/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    await deleteUser(userId);
    res.status(201).json({
      message: "the user delete successfully from database",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
});

router.delete("/api/userall", async (req, res) => {
  try {
    console.log("1");
    await deleteAllUsers();

    console.log("2");
    res.status(201).json({
      message: "users delete successfully from database",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
});

router.put("/api/user", async (req, res) => {
  try {
    const { id, title, description, is_completed } = req.body;
    // console.log( id, title, description, is_completed );
    await updateUser(id, title, description, is_completed);
    res.status(201).json({
      message: "the user update successfully in database",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
});

router.put("/api/user/alltik", async (req, res) => {
  try {
    await markAllAsComplite();
    res.status(201).json({
      message: "the user update successfully in database",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
});

export { router };
