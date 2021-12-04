import { DataBase } from '../../../../database';
import { CompanyAttributes } from '../../models/company.model';

export const createCompany = async (company: CompanyAttributes) => {
  try {
    return await DataBase.instance.Company.create(company);
  } catch (err) {
    throw err;
  }
};
