import express from 'express';
import validateRequest from '../../app/config/middlewares/validateRequest';
import {
  createCourseValidationSchema,
  updateCourseValidationSchema,
} from './course.validation';
import { courseController } from './course.controller';

const router = express.Router();

router.post(
  '/',
  validateRequest(createCourseValidationSchema),
  courseController.createCourse,
);
router.get('/:courseId/reviews', courseController.getCourseWithReviews);
router.get('/best', courseController.getBestCourseBasedOnReview);
router.get('/', courseController.getAllCourses);
router.put(
  '/:courseId',
  validateRequest(updateCourseValidationSchema),
  courseController.updateCourse,
);

export const courseRoute = router;
