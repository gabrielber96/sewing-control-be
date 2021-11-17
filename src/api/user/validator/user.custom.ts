import { findOneUser } from '../services/find.user';

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
