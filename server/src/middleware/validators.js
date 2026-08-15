import { body } from "express-validator";

export const contactValidationRules = [
  body("name").trim().notEmpty().withMessage("Name is required").isLength({ max: 200 }),
  body("email").trim().isEmail().withMessage("A valid email is required").normalizeEmail(),
  body("phone").optional({ checkFalsy: true }).trim().isLength({ max: 40 }),
  body("shootType").optional({ checkFalsy: true }).trim().isLength({ max: 60 }),
  body("preferredDate").optional({ checkFalsy: true }).trim().isLength({ max: 40 }),
  body("location").optional({ checkFalsy: true }).trim().isLength({ max: 200 }),
  body("budget").optional({ checkFalsy: true }).trim().isLength({ max: 100 }),
  body("message").trim().notEmpty().withMessage("Message is required").isLength({ max: 4000 }),
];
