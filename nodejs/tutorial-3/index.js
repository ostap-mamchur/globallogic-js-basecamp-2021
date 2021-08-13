const http = require('http');
const env = require('dotenv').config();

const processRestApi = require('./processRestApi');
const processStaticFile = require('./processStaticFile');

const { CONTENT_TYPES } = require('./config');

http.createServer((req, res) => {
    if (req.url.startsWith('/static/')) {
        processStaticFile(req, res);
    } else if (req.url.startsWith('/api')) {
        processRestApi(req, res);
    } else if (req.url === '/') {
        res.writeHead(302, { 'Location': '/static/index.html'});
        res.end();
    } else {
        res.writeHead(404, { 'Content-Type': CONTENT_TYPES['.json']});
        res.end(JSON.stringify({
            status: 404,
            error: 'Not Found',
        }));
    }
}).listen(env.parsed.PORT, () => console.log(`Server started on: http://localhost:${env.parsed.PORT}`));
