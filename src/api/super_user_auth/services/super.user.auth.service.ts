import { findOneSuperUser } from '../../super_user/services/find';
import { createSuperUser } from '../../super_user/services/create';
import { sign } from 'jsonwebtoken';
import { config } from '../../../config/index';
export const signInSuperAdminService = async () => {
  try {
    // let super_user = await findOneSuperUser({
    //   id: 1,
    // });
    // if (!super_user) super_user = await createSuperUser({});

    return sign({ _id: 'super_user' }, config.SECRET_HIDDEN_KEY);
  } catch (err) {
    throw err;
  }
};
