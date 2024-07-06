import Joi from "joi";
const userIdValidator = async (req, res, next) => {
  try {
    const schema = Joi.object({
      id: Joi.number().required(),
    }).required();

    const validationResult = await schema.validateAsync(req.params);
    req.validated = validationResult;
    next();
  } catch (error) {
    console.log(error);
  }
};
export { userIdValidator };
