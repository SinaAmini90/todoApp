import { getUserByIdService } from "../../services/users/api.js";

const getUserByIdController = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const user = await getUserByIdService(userId);
    res.json(user);
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
};
export { getUserByIdController };
