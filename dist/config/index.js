"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = require("dotenv");
dotenv_1.config();
exports.config = {
    PORT: Number(process.env.PORT),
    HOST_DB: process.env.HOST_DB,
    NAME_DB: process.env.NAME_DB,
    PASSWORD_DB: process.env.PASSWORD_DB,
    PORT_DB: Number(process.env.PORT_DB),
    USER_DB: process.env.USER_DB,
    SECRET_HIDDEN_KEY: process.env.SECRET_HIDDEN_KEY,
};
