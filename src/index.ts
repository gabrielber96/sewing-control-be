import { Server } from "./api/server";
import { config } from "./config";
import { DataBase } from "./database";

const server = Server.init(config.PORT);
server.start(() => {
  console.log("Server on fire " + config.PORT);
  DataBase.instance
});
