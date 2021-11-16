import { DataBase } from '../../../database';
import moment from 'moment';
import { UserAttributes } from '../models/user.model';

export const createUser = async (user: UserAttributes) => {
  try {
    return await DataBase.instance.User.create({
      created: moment().toDate(),
      ...user,
    });
  } catch (err) {
    throw err;
  }
};
