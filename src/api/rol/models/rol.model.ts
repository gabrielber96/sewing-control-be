import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';
export interface RolAttributes {
  id?: number;
  rol?: string;
}
export interface RolModel extends Model<RolAttributes>, RolAttributes {}
export class Rol extends Model<RolModel, RolAttributes> {}
export type RolStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): RolModel;
};

export function RolFactory(sequelize: Sequelize): RolStatic {
  return <RolStatic>sequelize.define(
    'rol',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    },
    {
      initialAutoIncrement: '1',
      tableName: 'user',
      timestamps: false,
    }
  );
}
