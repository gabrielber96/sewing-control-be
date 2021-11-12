import { Server } from "./api/server";

const server = Server.init(Number(3000));
server.start(() => {
  console.log("Server on fire " + 3000);
});
