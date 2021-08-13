const http = require("http");
const port = 8080;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.write(`
      {
         "name": "tutorial-1",
         "version": "1.0.0",
         "description": "",
         "main": "index.js",
         "scripts": {
            "test": "echo \\"Error: no test specified\\" && exit 1"
         },
         "author": "",
         "license": "ISC"
      }
   `);
    res.end();
});

server.listen(port, () => {
    console.log("Server listening on: http://localhost:%s", port);
});