import joi from "joi";

const submitSchema = joi.object({
  name: joi.string().min(3).max(30).required(),
  url: joi.string().pattern(/^http/),
  subjectId: joi.number().integer().min(1).required(),
  professorId: joi.number().integer().min(1).required(),
  typeId: joi.number().integer().min(1).required(),
});

export { submitSchema };
