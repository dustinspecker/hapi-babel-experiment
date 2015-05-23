import Hapi from 'hapi';

let server = new Hapi.Server();
server.connection({port: 3000});

server.route({
  method: 'GET',
  path: '/',
  handler(request, reply) {
    reply('Hello, world!');
  }
});

server.route({
  method: 'GET',
  path: '/{name}',
  handler(request, reply) {
    reply(`Hello, ${encodeURIComponent(request.params.name)}!`);
  }
});

server.start(() => {
  console.log(`Server running at ${server.info.uri}`);
});
