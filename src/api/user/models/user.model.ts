import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';
export interface UserAttributes {
  id?: number;
  dni?: number;
  password?: string;
  date?: Date;
  name?: string;
  lastname?: string;
  email?: string;
  cellphone?: number;
  created?: Date;
  updated?: Date;
  sexo?: string;
  state?: number;
  key?: string;
  path?: string;
  size?: string;
  image?: Buffer;
}
export interface UserModel extends Model<UserAttributes>, UserAttributes {}
export class User extends Model<UserModel, UserAttributes> {}
export type UserStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): UserModel;
};

export function UserFactory(sequelize: Sequelize): UserStatic {
  return <UserStatic>sequelize.define(
    'user',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      dni: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      password: {
        type: DataTypes.STRING(300),
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      lastname: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      cellphone: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      created: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updated: {
        type: DataTypes.DATE,
      },
      sexo: {
        type: DataTypes.STRING(100),
      },
      state: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      key: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      path: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      size: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
    },
    {
      initialAutoIncrement: '1',
      tableName: 'user',
      timestamps: false,
      indexes: [
        {
          unique: true,
          fields: ['email', 'dni'],
        },
      ],
    }
  );
}
