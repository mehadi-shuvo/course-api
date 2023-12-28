import express from 'express';
import validateRequest from '../../app/config/middlewares/validateRequest';
import { createCategoryValidationSchema } from './category.validation';
import { categoryControllers } from './category.controller';

const router = express.Router();

router.post(
  '/',
  validateRequest(createCategoryValidationSchema),
  categoryControllers.createCategory,
);
router.get('/', categoryControllers.getAllCategories);

export const CategoryRoutes = router;
