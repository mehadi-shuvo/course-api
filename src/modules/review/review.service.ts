import httpStatus from 'http-status';
import AppError from '../../app/errors/AppError';
import { TReview } from './review.interface';
import { Review } from './review.model';

const createReviewIntoDB = async (payload: TReview) => {
  try {
    const result = await Review.create(payload);
    return result;
  } catch (err) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create review 🤕');
  }
};

export const reviewServices = {
  createReviewIntoDB,
};
