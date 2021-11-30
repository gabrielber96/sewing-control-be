import { NextFunction, Request, Response } from 'express';
import { config } from '../../../config/index';
import Sequelize from 'sequelize';
import createError from 'http-errors';
import { sign } from 'jsonwebtoken';

export const signInController = (req: Request, res: Response, next: NextFunction) => {
  try {
    const jwt = sign({ _id: 'su per_user' }, config.SECRET_HIDDEN_KEY);
    res.status(200).json({ jwt });
  } catch (err: any) {
    if (err instanceof Sequelize.ValidationError) next(createError(400, err));

    next(createError(404, err));
  }
};
