import { Request } from 'express';
import { Op } from 'sequelize';
import { findOneUser } from '../services/find.user';

export const signInSanitizer = async (dni: number, { req }: { req: any }) => {
  const user = await findOneUser({
    [Op.and]: {
      dni,
      state: 1,
    },
  });
  if (!user) return dni;
  req.body.id = user.id;
  req.body.name = user.name;
  req.body.lastname = user.lastname;
  req.body.path = user.path;
  req.body.origin_password = user.password;
  req.body.sexo = user.sexo;
  req.body.date = user.date;
  return dni;
};
