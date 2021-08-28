const fs = require("fs");
const zlib = require("zlib");

const readableStream = fs.createReadStream("text.txt", "utf8");

const writeableStream = fs.createWriteStream("text.txt.gz");

const gzip = zlib.createGzip();

readableStream
    .pipe(gzip)
    .pipe(writeableStream);