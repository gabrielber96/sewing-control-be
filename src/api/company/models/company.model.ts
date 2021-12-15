import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';
export interface CompanyAttributes {
  id?: number;
  business_name?: string;
  ruc?: number;
  direction?: string;
  created?: Date;
  updated?: Date;
  state?: number;
}
export interface CompanyModel
  extends Model<CompanyAttributes>,
    CompanyAttributes {}
export class Company extends Model<CompanyModel, CompanyAttributes> {}
export type CompanyStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): CompanyModel;
};

export function CompanyFactory(sequelize: Sequelize): CompanyStatic {
  return <CompanyStatic>sequelize.define(
    'company',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      business_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      ruc: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      direction: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      created: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updated: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      state: {
        type: DataTypes.TINYINT,
        defaultValue: 1,
      },
    },
    {
      initialAutoIncrement: '1',
      tableName: 'company',
      timestamps: false,
    }
  );
}
