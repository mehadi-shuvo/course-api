import { Router } from 'express';
import { courseRoute } from '../../modules/course/course.route';
import { CategoryRoutes } from '../../modules/category/category.route';
import { reviewRoutes } from '../../modules/review/review.route';
import { userRouter } from '../../modules/user/user.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/courses',
    route: courseRoute,
  },
  {
    path: '/categories',
    route: CategoryRoutes,
  },
  {
    path: '/reviews',
    route: reviewRoutes,
  },
  {
    path: '/auth',
    route: userRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
