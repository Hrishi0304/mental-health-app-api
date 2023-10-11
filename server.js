const jsonServer = require('json-server');
const server = jsonServer.create();
const route = jsonServer.route('db.json');
const middlewares = jsonServer.defaults();
const poer = process.env.PORT || 3000;

server.use(middlewares);
server.use(routes);

server.listen(port);