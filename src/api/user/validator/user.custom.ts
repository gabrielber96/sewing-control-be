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
  if (!req.body.id) throw new Error('El usuario no existe o esta deshabilitado');

  const result = await compare(req.body.password, req.body.origin_password);
  if (!result) throw new Error('La contraseña es incorrecta');
};
