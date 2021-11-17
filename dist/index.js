"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./api/server");
const config_1 = require("./config");
const database_1 = require("./database");
const server = server_1.Server.init(config_1.config.PORT);
server.start(() => {
    console.log("Server on fire " + config_1.config.PORT);
    database_1.DataBase.instance;
});
