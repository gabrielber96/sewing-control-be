import { DataBase } from '../../../../database';
import { SuperUserAttributes } from '../../../super_user/models/super.user.model';

export const createSuperUser = async (super_user: SuperUserAttributes) => {
  try {
    return await DataBase.instance.SuperUser.create(super_user);
  } catch (err) {
    throw err;
  }
};
