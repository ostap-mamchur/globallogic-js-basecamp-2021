const { CONTENT_TYPES } = require('./config');
const fs = require("fs");
const path = require("path")

function processRestApi(req, res) {
    const routes = {
        '/api/fighters': () => {
            fs.readFile(path.join(__dirname, "resources/fighters.json"), (err, data) => {
                if (err) {
                    res.end('42');
                } else {
                    res.writeHead(200, { 'Content-Type': CONTENT_TYPES['.json'] });
                    res.end(data);
                }
            })
        },
        '/api/42': () => {
            res.end('42');
        }
    }
    routes[req.url]();
};

module.exports = processRestApi;