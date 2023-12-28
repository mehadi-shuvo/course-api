import express from 'express';
import validateRequest from '../../app/config/middlewares/validateRequest';
import {
  userLoginSchemaValidation,
  userSchemaValidation,
} from './user.validation';
import { userController } from './user.controller';
const router = express.Router();

router.post(
  '/register',
  validateRequest(userSchemaValidation),
  userController.createUser,
);
router.post(
  '/login',
  validateRequest(userLoginSchemaValidation),
  userController.loginUser,
);
// router.get('/', categoryControllers.getAllCategories);

export const userRouter = router;
