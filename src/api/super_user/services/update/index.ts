import { DataBase } from '../../../../database';
import { SuperUserAttributes } from '../../../super_user/models/super.user.model';

export const updateSuperUser = async (super_user: SuperUserAttributes) => {
  try {
    return await DataBase.instance.SuperUser.update(super_user, {
      where: {
        id: 1,
      },
    });
  } catch (err) {
    throw err;
  }
};
