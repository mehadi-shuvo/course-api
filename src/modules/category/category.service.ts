import httpStatus from 'http-status';
import AppError from '../../app/errors/AppError';
import { TCategory } from './category.interface';
import { Category } from './category.model';

const createCategoryIntoDB = async (payload: TCategory) => {
  try {
    const result = await Category.create(payload);
    return result;
  } catch (err) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create Category 🤕');
  }
};

const getAllCategoriesFromDB = async () => {
  try {
    const result = await Category.find();
    return result;
  } catch (err) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Failed to find Categories 🤕');
  }
};

export const categoryServices = {
  createCategoryIntoDB,
  getAllCategoriesFromDB,
};
