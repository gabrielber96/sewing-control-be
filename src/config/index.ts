import { config as configuration } from 'dotenv';
import { IConfig } from '../interfaces';
configuration();

export const config: IConfig = {
  PORT: Number(process.env.PORT),
  HOST_DB: process.env.HOST_DB!,
  NAME_DB: process.env.NAME_DB!,
  PASSWORD_DB: process.env.PASSWORD_DB!,

  PORT_DB: Number(process.env.PORT_DB!),
  USER_DB: process.env.USER_DB!,
  SECRET_HIDDEN_KEY: process.env.SECRET_HIDDEN_KEY!,
  PASSWORD_SUPER_ADMIN: process.env.PASSWORD_SUPER_ADMIN!,
};
