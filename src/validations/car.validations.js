import joi from "joi";
export const carValidation = async (req, res, next) => {
  const carSchema = joi.object({
    driver_name: joi.string().required().messages({
      "any.required": "Driver names are required",
    }),
    car_plate: joi.string().required().messages({
      "any.required": "Car plate number are required",
    }),
    phone_number: joi.string().required().messages({
      "any.required": "Drive phone number is required",
    }),
  });
  const value = await carSchema.validate(req.body);
  if (value.error) {
    res.status(400).json({
      message: value.error.details[0].message.replace(/["'`]+/g, ""),
    });
  } else {
    next();
  }
};
