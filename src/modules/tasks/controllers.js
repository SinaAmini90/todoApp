import { getUserTasksService } from "../../services/tasks/api.js";
const getTaskByUserIdController = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const userTasks = await getUserTasksService(userId);
    res.json(userTasks);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
};

export { getTaskByUserIdController };
