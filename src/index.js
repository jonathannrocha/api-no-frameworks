const http = require('http');
const config = require('./config/config');
const routes = require('./routes');

const handleError = (response) => (error) => {
  response.writeHead(error.status, { 'Content-Type': 'application/json' });
  response.write(JSON.stringify({ error: error.message }));
  response.end();
};

const handler = (request, response) => {
  const { url, method } = request;
  const [, route, id] = url.split('/');
  request.queryString = { id };

  const key = `/${route}:${method.toLowerCase()}`;

  const chosen = routes[key] || routes.default;
  return chosen(request, response).catch(handleError(response));
};

http.createServer(handler).listen(
  config.PORT,
  // console.log(`server running on port http://localhost:${config.PORT}`),
);
