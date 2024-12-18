const bodyparser = (request, handle) => {
    let body = "";

    request.on("data", (chunk) => {
      body += chunk;
    });

    request.on("end", () => {
      if(body) {
        request.body = JSON.parse(body);
      }
      handle();
    });
}

export default bodyparser
