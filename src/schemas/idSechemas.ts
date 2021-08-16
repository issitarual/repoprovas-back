import joi from "joi";

const idSchema = joi.object({
  id: joi.number().integer().min(1).required(),
});

export { idSchema };
