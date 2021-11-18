import { NextFunction, Request, Response } from 'express';
import createError from 'http-errors';
import Sequelize from 'sequelize';
import { findAllSubRol } from '../services/find.sub.rol';

export const findAllSubRolController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const list = await findAllSubRol();
    res.status(200).json(list);
  } catch (err: any) {
    if (err instanceof Sequelize.ValidationError) next(createError(400, err));

    next(createError(404, err));
  }
};
