const http = require("http");
const {getImage, getInfo,pathImgLightOff, pathImgLightOn} = require("./my-moduls/file");


http.createServer((req, res) => {
    switch (req.url) {
        case "/turn-off":
            getImage(res, pathImgLightOff);
            break;
        case "/turn-on":
            getImage(res, pathImgLightOn);
            break;
        default:
            getInfo(res);
    }
}).listen(8000, "127.0.0.1");