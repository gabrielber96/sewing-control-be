"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataBase = void 0;
const sequelize_1 = require("sequelize");
const user_model_1 = require("../api/user/models/user.model");
const config_1 = require("../config");
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
        this.connectDb();
    }
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    connectDb() {
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
exports.DataBase = DataBase;
