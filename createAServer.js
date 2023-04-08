var http = require("http");
http
  .createServer((request, response) => {
    response.writeHead(200, {
      "Content-type": "text/html",
    });
    response.write("<h3>Hello Node!!!!</h3>\n");
    response.end();
  })
  .listen(8080);
console.log("Server running at http://127.0.0.1:8080/");