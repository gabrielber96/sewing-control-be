"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataBase = void 0;
const sequelize_1 = require("sequelize");
const rol_model_1 = require("../api/rol/models/rol.model");
const sub_rol_model_1 = require("../api/rol/models/sub.rol.model");
const user_model_1 = require("../api/user/models/user.model");
const config_1 = require("../config");
const user_1 = require("./associations/user");
class DataBase {
    constructor() {
        this.sequelize = new sequelize_1.Sequelize(config_1.config.NAME_DB, config_1.config.USER_DB, config_1.config.PASSWORD_DB, {
            host: config_1.config.HOST_DB,
            port: config_1.config.PORT_DB,
            logging: false,
            dialect: 'mysql',
            pool: {
                max: 5,
                min: 0,
                idle: 10000,
            },
        });
        this.User = user_model_1.UserFactory(this.sequelize);
        this.Rol = rol_model_1.RolFactory(this.sequelize);
        this.SubRol = sub_rol_model_1.SubRolFactory(this.sequelize);
        this.connectDb();
        this.associations();
    }
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    connectDb() {
        this.sequelize
            .authenticate()
            // .sync({ alter: true, logging: console.log })
            .then(() => {
            // this.bank.sync({ alter: true, logging: console.log })
            console.log('¡Run database!');
        })
            .catch((err) => console.log(err));
    }
    associations() {
        user_1.rolHasManyUser(this.Rol, this.User);
        user_1.subRolHasManyUser(this.SubRol, this.User);
    }
}
exports.DataBase = DataBase;
