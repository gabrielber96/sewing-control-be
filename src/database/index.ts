import { Sequelize } from 'sequelize';
import { RolFactory, RolStatic } from '../api/rol/models/rol.model';
import { SubRolFactory, SubRolStatic } from '../api/rol/models/sub.rol.model';
import { UserFactory, UserStatic } from '../api/user/models/user.model';
import { config } from '../config';
import { rolHasManyUser, subRolHasManyUser } from './associations/user';
import {
  CompanyStatic,
  CompanyFactory,
} from '../api/company/models/company.model';
import {
  companyHasManyUser,
  companyHasManyContacs,
} from './associations/company';
import {
  SuperUserStatic,
  SuperUserFactory,
} from '../api/super_user/models/super.user.model';
import {
  ContactStatic,
  ContactFactory,
} from '../api/contact/models/contact.model';
import { tableRol, tableSubRol, tableSuperUser } from './default';
export class DataBase {
  private static _instance: DataBase;
  public sequelize: Sequelize;
  public User: UserStatic;
  public Rol: RolStatic;
  public SubRol: SubRolStatic;
  public Company: CompanyStatic;
  public SuperUser: SuperUserStatic;
  public Contact: ContactStatic;
  constructor() {
    this.sequelize = new Sequelize(
      config.NAME_DB,
      config.USER_DB,
      config.PASSWORD_DB,
      {
        host: config.HOST_DB,
        port: config.PORT_DB,
        logging: false,
        dialect: 'mysql',
        pool: {
          max: 5,
          min: 0,
          idle: 10000,
        },
      }
    );
    this.User = UserFactory(this.sequelize);
    this.Rol = RolFactory(this.sequelize);
    this.SubRol = SubRolFactory(this.sequelize);
    this.Company = CompanyFactory(this.sequelize);
    this.SuperUser = SuperUserFactory(this.sequelize);
    this.Contact = ContactFactory(this.sequelize);
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
        //*Tables for default
        // tableRol();
        // tableSubRol();
        // tableSuperUser();
      })
      .catch((err) => console.log(err));
  }
  private associations() {
    rolHasManyUser(this.Rol, this.User);
    subRolHasManyUser(this.SubRol, this.User);
    companyHasManyUser(this.Company, this.User);
    companyHasManyContacs(this.Company, this.Contact);
  }
}
