const fs = require("fs");
const logger = require("./log.js");

const pathImgLightOn = `${__dirname}/../constants/light-on.txt`;
const pathImgLightOff = `${__dirname}/../constants/light-off.txt`;
const pathHtmlFile = `${__dirname}/../constants/template.html`;
const pathInfoHTML = `${__dirname}/../constants/info.html`;

function getImage(res, path) {
    fs.readFile(path, (err, data) => {
        if (err) return hadError(err, res);
        logger(null, "Received the src");
        getTemplate(data.toString(), res);
    });
}

function getTemplate(src, res) {
    fs.readFile(pathHtmlFile, (err, data) => {
        if (err) return hadError(err, res);
        logger(null, "Received the HTML file")
        formatHtml(src, data.toString(), res);
    })
}

function formatHtml(src, tmpl, res) {
    const html = tmpl.replace("%", src);
    logger(null, "Return the HTML file");
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end(html);
}

function hadError(err, res) {
    logger(err);
    res.end("Server error");
}

function getInfo(res) {
    fs.readFile(pathInfoHTML, (err, data) => {
        if (err) return hadError(err, res);
        logger(null, "Received the HTML file")
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(data.toString());
    })
}

exports.getImage = getImage;
exports.pathImgLightOff = pathImgLightOff;
exports.pathImgLightOn = pathImgLightOn;
exports.getInfo = getInfo;