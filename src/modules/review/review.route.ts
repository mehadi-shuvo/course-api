import express from 'express';
import validateRequest from '../../app/config/middlewares/validateRequest';
import { createReviewValidationSchema } from './review.validation';
import { reviewControllers } from './review.controller';

const router = express.Router();

router.post(
  '/',
  validateRequest(createReviewValidationSchema),
  reviewControllers.createReview,
);

export const reviewRoutes = router;
