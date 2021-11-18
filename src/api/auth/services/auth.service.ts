import { UserAttributes } from '../../user/models/user.model';
import { createUser } from '../../user/services/create.user';
import { findOneUser } from '../../user/services/find.user';
import { sign } from 'jsonwebtoken';
import { config } from '../../../config';

export const signUpService = async (user: UserAttributes) => {
  try {
    return await createUser(user);
  } catch (err) {
    throw err;
  }
};
