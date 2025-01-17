import http from "http";
import bodyparser from "./bodyparser.js";
import routes from "./routes.js";
import url from "url";

const PORT = process.env.PORT || 3000;

const server = http.createServer((request, response) => {
  const pasrsedUrl = url.parse(request.url, true);
  let { pathname } = pasrsedUrl;
  const splitedEndpoint = pathname.split("/").filter(Boolean);
  const routeParams = {};

  if(splitedEndpoint.length > 1) {
    pathname = `/${splitedEndpoint[0]}/:id`;
    routeParams.id = splitedEndpoint[1];
  }

  const route = routes.find((route) => route.path === pathname && route.method === request.method);

  if(!route) {
    response.writeHead(404, { "Content-Type": "text/html" });
    response.end(`Route ${request.url} not found`);
    return;
  }

  request.query = pasrsedUrl.query;
  request.params = routeParams;
  response.send = (body, status) => {
    response.writeHead(status, { "Content-Type": "application/json" });
    response.end(JSON.stringify(body));
  }

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
