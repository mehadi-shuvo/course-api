import { Model } from 'mongoose';

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

export interface UserModel extends Model<TUser> {
  isPasswordMatched(
    planePassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
}
