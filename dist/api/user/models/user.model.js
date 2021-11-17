"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFactory = exports.User = void 0;
const sequelize_1 = require("sequelize");
class User extends sequelize_1.Model {
}
exports.User = User;
function UserFactory(sequelize) {
    return sequelize.define('user', {
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        dni: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true,
        },
        password: {
            type: sequelize_1.DataTypes.STRING(300),
        },
        salt: {
            type: sequelize_1.DataTypes.STRING(500),
        },
        name: {
            type: sequelize_1.DataTypes.STRING(100),
            allowNull: true,
        },
        lastname: {
            type: sequelize_1.DataTypes.STRING(100),
            allowNull: true,
        },
        email: {
            type: sequelize_1.DataTypes.STRING(100),
            allowNull: false,
        },
        cellphone: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true,
        },
        created: {
            type: sequelize_1.DataTypes.DATE,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        updated: {
            type: sequelize_1.DataTypes.DATE,
        },
        sexo: {
            type: sequelize_1.DataTypes.STRING(100),
        },
        state: {
            type: sequelize_1.DataTypes.BOOLEAN,
            defaultValue: true,
        },
        key: {
            type: sequelize_1.DataTypes.STRING(100),
            allowNull: true,
        },
        path: {
            type: sequelize_1.DataTypes.STRING(20),
            allowNull: true,
        },
        size: {
            type: sequelize_1.DataTypes.STRING(20),
            allowNull: true,
        },
    }, {
        initialAutoIncrement: '1',
        tableName: 'user',
        timestamps: false,
        indexes: [
            {
                unique: true,
                fields: ['email'],
            },
        ],
    });
}
exports.UserFactory = UserFactory;
