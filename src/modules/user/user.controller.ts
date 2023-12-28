import { Request, Response } from 'express';
import catchAsync from '../../app/util/catchAsync';
import { userServices } from './user.service';
import { sendResponse } from '../../app/util/sendResponse';

const createUser = catchAsync(async (req: Request, res: Response) => {
  const result = await userServices.createUserIntoDB(req.body);
  sendResponse(res, {
    data: result,
    statusCode: 200,
    success: true,
    message: 'user created successfully😀',
  });
});
const loginUser = catchAsync(async (req: Request, res: Response) => {
  const result = await userServices.loginUserService(req.body);
  sendResponse(res, {
    data: result,
    statusCode: 200,
    success: true,
    message: 'user logged-in successfully😀',
  });
});

export const userController = {
  createUser,
  loginUser,
};
