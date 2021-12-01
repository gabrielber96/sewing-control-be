import { DataBase } from '../../../../database';
import { WhereOptions } from 'sequelize/types';
import { SuperUserAttributes } from '../../../super_user/models/super.user.model';
export const findOneSuperUser = async (where?: WhereOptions<SuperUserAttributes>) => {
  try {
    const super_user = await DataBase.instance.SuperUser.findOne({
      where,
    });
    if (super_user) return super_user.get({ plain: true });
    return super_user;
  } catch (err) {
    throw err;
  }
};
