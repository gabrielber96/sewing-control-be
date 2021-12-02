import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';
export interface ContactAttributes {
  id?: number;
  name?: string;
  ruc?: number;
  direction?: string;
  created?: Date;
  updated?: Date;
  state?: number;
}
export interface ContactModel extends Model<ContactAttributes>, ContactAttributes {}
export class Contact extends Model<ContactModel, ContactAttributes> {}
export type ContactStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): ContactModel;
};

export function ContactFactory(sequelize: Sequelize): ContactStatic {
  return <ContactStatic>sequelize.define(
    'Contact',
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
        type: DataTypes.INTEGER,
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
      tableName: 'Contact',
      timestamps: false,
    }
  );
}
