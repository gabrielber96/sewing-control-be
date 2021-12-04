import { DataBase } from '../../../../database';
import { CompanyAttributes } from '../../models/company.model';
import { WhereOptions, FindAttributeOptions } from 'sequelize/types';

export const findOneCompany = async (where: WhereOptions<CompanyAttributes>, attributes?: FindAttributeOptions) => {
  try {
    const company = await DataBase.instance.Company.findOne({
      where,
      attributes,
    });
    if (company) return company.get({ plain: true });
    return company;
  } catch (err) {
    throw err;
  }
};
