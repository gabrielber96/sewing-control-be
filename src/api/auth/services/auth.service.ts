import { UserAttributes } from '../../user/models/user.model';
import { createUser } from '../../user/services/create.user';
import { findOneUser } from '../../user/services/find.user';

export const signUpService = async (user: UserAttributes) => {
  try {
    return await createUser(user);
  } catch (err) {
    throw err;
  }
};

export const signInService = async (dni: number, password: string) => {
  try {
  } catch (err) {
    throw err;
  }
};
