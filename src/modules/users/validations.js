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

const userInfoValidator = async (req, res, next) => {
  try {
    const schema = Joi.object({
      username: Joi.string().alphanum().min(3).max(30).required(),

      password: Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
        .required(),

      firstname: Joi.string().min(2).max(30),
      lastname: Joi.string().min(2).max(30),
      email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      }),
      phonenumber: Joi.string()
        .length(11)
        .pattern(/^[0-9]+$/),
    });

    const validationResult = await schema.validateAsync(req.body); // Change from req.params to req.body
    req.validated = validationResult;
    next();
  } catch (error) {
    res.status(400).json({ error: error.message }); // Send a response with the error message
  }
};

const userEditValidator = async (req, res, next) => {
  try {
    const schema = Joi.object({
      id: Joi.number(),
      username: Joi.string().alphanum().min(3).max(30).required(),

      password: Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
        .required(),

      firstname: Joi.string().min(2).max(30),
      lastname: Joi.string().min(2).max(30),
      email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      }),
      phonenumber: Joi.string()
        .length(11)
        .pattern(/^[0-9]+$/),
    });

    const validationResult = await schema.validateAsync(req.body); // Change from req.params to req.body
    req.validated = validationResult;
    next();
  } catch (error) {
    res.status(400).json({ error: error.message }); // Send a response with the error message
  }
};

export { userIdValidator, userInfoValidator, userEditValidator };
