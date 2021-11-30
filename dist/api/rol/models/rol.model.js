"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolFactory = exports.Rol = void 0;
const sequelize_1 = require("sequelize");
class Rol extends sequelize_1.Model {
}
exports.Rol = Rol;
function RolFactory(sequelize) {
    return sequelize.define('rol', {
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        rol: {
            type: sequelize_1.DataTypes.STRING,
        },
    }, {
        initialAutoIncrement: '1',
        tableName: 'rol',
        timestamps: false,
    });
}
exports.RolFactory = RolFactory;
