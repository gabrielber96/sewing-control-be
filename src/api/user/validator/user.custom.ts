import { Op } from 'sequelize';
import { findOneUser } from '../services/find.user';
import { compare } from 'bcrypt';

export const existsUserByDni = async (dni: number) => {
  const user = await findOneUser({
    dni,
  });
  if (user) throw new Error('Ya existe el DNI ingresado');
};
export const existsUserByEmail = async (email: string) => {
  const user = await findOneUser({
    email,
  });
  if (user) throw new Error('Ya existe el Email ingresado');
};
export const signInValidation = async (dni: number, { req }: { req: any }) => {
  const user = await findOneUser({
    [Op.and]: {
      dni,
      state: 1,
    },
  });
  if (!user) throw new Error('El usuario no existe o esta deshabilitado');
  const result = await compare(req.body.password, user.password!);

  if (!result) throw new Error('La contraseña es incorrecta');
};
