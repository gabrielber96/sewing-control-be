import { DataBase } from '../../../database';
import moment from 'moment';
import { UserAttributes } from '../models/user.model';
import { genSalt, hash } from 'bcrypt';

export const createUser = async (user: UserAttributes) => {
  try {
    const salt = await genSalt(10);
    const password = await hash(user.password!, salt);
    console.log(password);
    return await DataBase.instance.User.create({
      ...user,
      created: moment().toDate(),
      password,
    });
  } catch (err) {
    throw err;
  }
};
