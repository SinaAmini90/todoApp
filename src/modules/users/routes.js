import express from "express";
import { createUserController, getUserByIdController } from "./controllers.js";
import { userIdValidator, userInfoValidator } from "./validations.js";

const router = express.Router();
router.get("/api/user/:id", userIdValidator, getUserByIdController);
router.post("/api/user", userInfoValidator, createUserController);

// router.get("/api/user", async (req, res) => {
//   try {
//     const userList = await getUsers();
//     res.json(userList);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// });

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
