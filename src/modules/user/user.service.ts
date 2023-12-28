import httpStatus from 'http-status';
import AppError from '../../app/errors/AppError';
import { TLogin, TUser } from './user.interface';
import { User } from './user.model';
import { createToken } from './user.utils';
import config from '../../app/config';

const createUserIntoDB = async (payload: TUser) => {
  const result = await User.create(payload);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { password, ...userWithoutPassword } = result.toObject();

  return userWithoutPassword;
  return userWithoutPassword;
};

const loginUserService = async (payload: TLogin) => {
  const user = await User.findOne({ username: payload.username });
  //   console.log(user);

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found');
  }
  if (!(await User.isPasswordMatched(payload.password, user?.password))) {
    throw new AppError(httpStatus.NOT_FOUND, 'Invalied password');
  }
  const now = new Date();
  const iat = Math.floor(now.getTime() / 1000);
  //   const exp = iat + 60 * 60;
  const tokenPayload = {
    _id: user?._id.toString(),
    role: user?.role,
    email: user.email,
    iat,
    // exp,
  };
  //   console.log(user?._id.toString());

  const token = createToken(
    tokenPayload,
    config.jwt_secret as string,
    config.jwt_exp_in as string,
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { password, ...userWithoutPassword } = user.toObject();
  return {
    user: userWithoutPassword,
    token,
  };
};

export const userServices = {
  createUserIntoDB,
  loginUserService,
};
