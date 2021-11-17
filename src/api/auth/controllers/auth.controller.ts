import { NextFunction, Request, Response } from 'express';
import createError from 'http-errors';
import Sequelize from 'sequelize';
import { signInService, signUpService } from '../services/auth.service';

export const signUpController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await signUpService({
      dni: req.body.dni,
      cellphone: req.body.cellphone,
      email: req.body.email,
      name: req.body.name,
      lastname: req.body.lastname,
      password: req.body.password,
      sexo: req.body.sexo,
      date: req.body.date,
      image: req.body.image,
    });
    res.status(200).json('¡usuario creado!');
  } catch (err: any) {
    if (err instanceof Sequelize.ValidationError) next(createError(400, err));

    next(createError(404, err));
  }
};
export const signInController = (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = signInService({
      name: req.body.name,
      lastname: req.body.lastname,
      date: req.body.date,
      sexo: req.body.sexo,
      path: req.body.path,
    });
    res.status(200).json(result);
  } catch (err: any) {
    if (err instanceof Sequelize.ValidationError) next(createError(400, err));

    next(createError(404, err));
  }
};
