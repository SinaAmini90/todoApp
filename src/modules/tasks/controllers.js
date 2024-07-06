import {
  getUserTasksService,
  getTaskByIdService,
} from "../../services/tasks/api.js";
const getTaskByUserIdController = async (req, res, next) => {
  try {
    const userId = req.validated.id; //=validate req.params.id;
    const userTasks = await getUserTasksService(userId);
    res.json(userTasks);
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
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
};

export { getTaskByUserIdController, getTaskByIdController };
