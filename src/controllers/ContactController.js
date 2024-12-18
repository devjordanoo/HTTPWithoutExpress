class ContactController {
  GET(request, response) {
    response.end("GET");
  }

  POST(request, response) {
    response.end(JSON.stringify(request.body));
  }

  PUT(request, response) {
    response.end(JSON.stringify(request.body));
  }

  DELETE(request, response) {
    response.end("DELETE");
  }
}

export default new ContactController();
