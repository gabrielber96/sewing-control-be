"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubRolFactory = exports.SubRol = void 0;
const sequelize_1 = require("sequelize");
class SubRol extends sequelize_1.Model {
}
exports.SubRol = SubRol;
function SubRolFactory(sequelize) {
    return sequelize.define('sub_rol', {
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        sub_rol: {
            type: sequelize_1.DataTypes.STRING,
        },
    }, {
        initialAutoIncrement: '1',
        tableName: 'sub_rol',
        timestamps: false,
    });
}
exports.SubRolFactory = SubRolFactory;
