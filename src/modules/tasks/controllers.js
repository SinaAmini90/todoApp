import {
  getUserTasksService,
  getTaskByIdService,
  createTaskService,
  deleteTaskService,
} from "../../services/tasks/api.js";
const getTaskByUserIdController = async (req, res, next) => {
  try {
    const userId = req.validated.id; //=validate req.params.id;
    const userTasks = await getUserTasksService(userId);
    res.json(userTasks);
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
};

const getTaskByIdController = async (req, res, next) => {
  try {
    const taskId = req.validated.id; //=req.params.id;
    const task = await getTaskByIdService(taskId);
    res.json(task);
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
};

const createTaskController = async (req, res, next) => {
  try {
    const {
      title,
      description,
      priority,
      reminder,
      category_id,
      deadline,
      user_id,
    } = req.body;
    await createTaskService(
      title,
      description,
      priority,
      reminder,
      category_id,
      deadline,
      user_id
    );
    res.status(201).json({
      message: "the todo add successfully to database",
    });
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteTaskController = async (req, res, next) => {
  try {
    const taskId = req.validated.id; //=req.params.id;
    await deleteTaskService(taskId);
    res.status(201).json({
      message: "the todo delete successfully from database",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
};

export {
  deleteTaskController,
  getTaskByUserIdController,
  getTaskByIdController,
  createTaskController,
};
