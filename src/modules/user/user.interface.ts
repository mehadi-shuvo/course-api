import { Model, Types } from 'mongoose';

export type TUserRole = 'user' | 'admin';

export type TUser = {
  username: string;
  email: string;
  password: string;
  role: TUserRole;
};

export type TLogin = {
  username: string;
  password: string;
};

export type TPasswords = {
  userId: Types.ObjectId;
  current: string;
  previous: string;
  prePrevious: string;
};

export interface UserModel extends Model<TUser> {
  isPasswordMatched(
    planePassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
}
