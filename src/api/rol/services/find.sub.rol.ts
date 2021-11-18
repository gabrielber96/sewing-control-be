import { WhereOptions } from 'sequelize/types';
import { DataBase } from '../../../database';
import { SubRolAttributes } from '../models/sub.rol.model';

export const findAllSubRol = async (where?: WhereOptions<SubRolAttributes>) => {
  try {
    return await DataBase.instance.SubRol.findAll({
      where,
    });
  } catch (err) {
    throw err;
  }
};
