import { FindAttributeOptions, WhereOptions } from 'sequelize/types';
import { DataBase } from '../../../database';
import { UserAttributes } from '../models/user.model';

export const findOneUser = async (attributes?: FindAttributeOptions, where?: WhereOptions<UserAttributes>) => {
  try {
    const user = await DataBase.instance.User.findOne({
      attributes,
      where,
    });
    if (user) return user.get({ plain: true });
    return user;
  } catch (err) {
    throw err;
  }
};
