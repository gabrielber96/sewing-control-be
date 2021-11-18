import { Sequelize } from 'sequelize';
import { RolFactory, RolStatic } from '../api/rol/models/rol.model';
import { SubRolFactory, SubRolStatic } from '../api/rol/models/sub.rol.model';
import { UserFactory, UserStatic } from '../api/user/models/user.model';
import { config } from '../config';
import { rolHasManyUser, subRolHasManyUser } from './associations/user';
export class DataBase {
  private static _instance: DataBase;
  public sequelize: Sequelize;
  public User: UserStatic;
  public Rol: RolStatic;
  public SubRol: SubRolStatic;
  constructor() {
    this.sequelize = new Sequelize(config.NAME_DB, config.USER_DB, config.PASSWORD_DB, {
      host: config.HOST_DB,
      port: config.PORT_DB,
      logging: false,
      dialect: 'mysql',
      pool: {
        max: 5,
        min: 0,
        idle: 10000,
      },
    });
    this.User = UserFactory(this.sequelize);
    this.Rol = RolFactory(this.sequelize);
    this.SubRol = SubRolFactory(this.sequelize);
    this.connectDb();
    this.associations();
  }
  public static get instance(): DataBase {
    return this._instance || (this._instance = new this());
  }
  private connectDb(): void {
    this.sequelize
      .authenticate()
      // .sync({ alter: true, logging: console.log })
      .then(() => {
        // this.bank.sync({ alter: true, logging: console.log })
        console.log('¡Run database!');
      })
      .catch((err) => console.log(err));
  }
  private associations() {
    rolHasManyUser(this.Rol, this.User);
    subRolHasManyUser(this.SubRol, this.User);
  }
}
