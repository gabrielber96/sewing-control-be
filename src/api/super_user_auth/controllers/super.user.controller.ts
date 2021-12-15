import { NextFunction, Request, Response } from 'express';
import Sequelize from 'sequelize';
import createError from 'http-errors';
import { signInSuperAdminService } from '../services/super.user.auth.service';

export const signInSuperUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const jwt = await signInSuperAdminService();
    res.status(200).json({ jwt });
  } catch (err: any) {
    if (err instanceof Sequelize.ValidationError) next(createError(400, err));

    next(createError(404, err));
  }
};
