function logger(err, mes) {
    if (err) console.error(err);
    console.log(mes);
}

module.exports = logger;