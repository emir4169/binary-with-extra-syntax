const prompt = require('prompt');

prompt.start();

prompt.get(['binary'], function (err, result) {
    if (err) { return onErr(err); }
    console.log('Command-line input received:' + binary);
});

function onErr(err) {
    console.log(err);
    return 1;
}