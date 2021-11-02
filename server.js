const ronin = require("ronin-server");
const mocks = require("ronin-mocks");
const database = require('ronin-database');

const server = ronin.server({ port: 8001 });

database.connect(process.env.CONNECTIONSTRING);
server.use("/foo", (req, res) => {
  return res.json({ foo: "bar2" });
});
server.use("/", mocks.server(server.Router(), false, false));
server.start();
