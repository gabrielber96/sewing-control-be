import { DataBase } from '../../../database';
import moment from 'moment';
import { UserAttributes } from '../models/user.model';
import { genSalt, hash } from 'bcrypt';

export const createUser = async (user: UserAttributes) => {
  try {
    const salt = await genSalt(10);
    const password = await hash(user.password!, salt);
    return await DataBase.instance.User.create({
      created: moment().toDate(),
      password,
      ...user,
    });
  } catch (err) {
    throw err;
  }
};
