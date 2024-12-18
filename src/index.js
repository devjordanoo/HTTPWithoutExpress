import http from "http";
import bodyparser from "./bodyparser.js";
import routes from "./routes.js";

const PORT = process.env.PORT || 3000;

const server = http.createServer((request, response) => {
  const route = routes.find((route) => route.path === request.url && route.method === request.method);

  if(!route) {
    response.writeHead(404, { "Content-Type": "text/html" });
    response.end(`Route ${request.url} not found`);
    return;
  }

  response.writeHead(200, { "Content-Type": "application/json" });
  if(['POST', 'PUT'].includes(request.method)) {
    bodyparser(request, () => route.handler(request, response));
    return;
  } else {
    route.handler(request, response);
    return;
  }
});

console.log(`Server is running on port ${PORT}`);
console.log(`http://localhost:${PORT}`);
server.listen(PORT);
