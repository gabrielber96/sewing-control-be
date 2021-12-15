import { NextFunction, Request, Response } from 'express';
import createError from 'http-errors';
import Sequelize from 'sequelize';
import { createCompany } from '../services/create/index';
import { findAllCompany } from '../services/find';

export const createCompanyController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { business_name, direction, ruc } = req.body;
    const company = await createCompany({
      business_name,
      direction,
      ruc,
    });
    res.status(200).json(company);
  } catch (err: any) {
    if (err instanceof Sequelize.ValidationError) next(createError(400, err));

    next(createError(404, err));
  }
};
export const listCompanyController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const companies = await findAllCompany({
      state: 1,
    });
    res.status(200).json(companies);
  } catch (err: any) {
    if (err instanceof Sequelize.ValidationError) next(createError(400, err));

    next(createError(404, err));
  }
};
