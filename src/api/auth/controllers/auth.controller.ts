import { NextFunction, Request, Response } from 'express';
import createError from 'http-errors';
import Sequelize from 'sequelize';
import { signUpService } from '../services/auth.service';

export const signUpController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await signUpService({
      dni: req.body.dni,
      cellphone: req.body.cellphone,
      email: req.body.email,
      name: req.body.name,
      password: req.body.password,
      sexo: req.body.sexo,
      lastname: req.body.lastname,
      image: req.body.image,
    });
    res.status(200).json('¡usuario creado!');
  } catch (err: any) {
    if (err instanceof Sequelize.ValidationError) next(createError(400, err));

    next(createError(404, err));
  }
};
