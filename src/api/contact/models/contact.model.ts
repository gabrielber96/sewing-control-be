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
    'contact',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      lastname: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      dni: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      cellphone: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      created: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updated: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      initialAutoIncrement: '1',
      tableName: 'contact',
      timestamps: false,
    }
  );
}
