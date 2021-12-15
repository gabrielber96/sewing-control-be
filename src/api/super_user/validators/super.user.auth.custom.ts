import { config } from '../../../config/index';
export const sessionActiveSuperUser = () => {};

export const validPasswordSuperUser = (password: string) => {
  if (config.PASSWORD_SUPER_ADMIN !== password)
    throw new Error('La contraseña no coincide');
};
