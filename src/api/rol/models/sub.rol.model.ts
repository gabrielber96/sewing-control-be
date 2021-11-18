import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';
export interface SubRolAttributes {
  id?: number;
  sub_rol?: string;
}
export interface SubRolModel extends Model<SubRolAttributes>, SubRolAttributes {}
export class SubRol extends Model<SubRolModel, SubRolAttributes> {}
export type SubRolStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): SubRolModel;
};

export function SubRolFactory(sequelize: Sequelize): SubRolStatic {
  return <SubRolStatic>sequelize.define(
    'sub_rol',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      sub_rol: {
        type: DataTypes.STRING,
      },
    },
    {
      initialAutoIncrement: '1',
      tableName: 'sub_rol',
      timestamps: false,
    }
  );
}
