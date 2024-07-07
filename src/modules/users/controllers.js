import {
  createUserService,
  getUserByIdService,
} from "../../services/users/api.js";

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

const createUserController = async (req, res, next) => {
  try {
    const { username, firstname, lastname, phonenumber, email, password } =
      req.body;
    await createUserService(
      username,
      firstname,
      lastname,
      phonenumber,
      email,
      password
    );
    res.status(201).json({
      message: "the user add successfully to database",
    });
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
};
export { getUserByIdController, createUserController };
