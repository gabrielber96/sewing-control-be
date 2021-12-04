import { DataBase } from '../../../../database';
import { CompanyAttributes } from '../../models/company.model';
import { WhereOptions } from 'sequelize/types';

export const updateCompay = async (company: CompanyAttributes, where: WhereOptions<CompanyAttributes>) => {
  try {
    return await DataBase.instance.Company.update(company, {
      where,
    });
  } catch (err) {
    throw err;
  }
};
