import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';
export interface SuperUserAttributes {
  id?: number;
  username?: string;
  password?: string;
  session_active?: number;
}
export interface SuperUserModel
  extends Model<SuperUserAttributes>,
    SuperUserAttributes {}
export class SuperUser extends Model<SuperUserModel, SuperUserAttributes> {}
export type SuperUserStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): SuperUserModel;
};

export function SuperUserFactory(sequelize: Sequelize): SuperUserStatic {
  return <SuperUserStatic>sequelize.define(
    'super_user',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      session_active: {
        type: DataTypes.TINYINT,
        defaultValue: 0,
      },
    },
    {
      initialAutoIncrement: '1',
      tableName: 'super_user',
      timestamps: false,
    }
  );
}
