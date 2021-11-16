import { Sequelize } from 'sequelize';
import { UserFactory, UserStatic } from '../api/user/models/user.model';
import { config } from '../config';
export class DataBase {
  private static _instance: DataBase;
  public sequelize: Sequelize;
  public User: UserStatic;
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
    this.connectDb();
  }
  public static get instance(): DataBase {
    return this._instance || (this._instance = new this());
  }
  private connectDb(): void {
    this.sequelize
      .authenticate()
      //   .sync({ alter: true, logging: console.log })
      .then(() => {
        // this.bank.sync({ alter: true, logging: console.log })
        console.log('¡Run database!');
      })
      .catch((err) => console.log(err));
  }
}
