import { DataBase } from '../../../../database';
import { CompanyAttributes } from '../../models/company.model';
import moment from 'moment';

export const createCompany = async (company: CompanyAttributes) => {
  try {
    return await DataBase.instance.Company.create({
      ...company,
      created: moment().toDate(),
    });
  } catch (err) {
    throw err;
  }
};
