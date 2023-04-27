const prompt = require('prompt');
binarydata = 101
binarylistdata = []

prompt.start();

prompt.get(['binary'], function (err, result) {
    if (err) { return onErr(err); }
    binarydata = result.binary
    console.log('Command-line input received:' + binarydata);
    binarylistdata = String(num).split('').map(str => Number(str));

});

function onErr(err) {
    console.log(err);
    return 1;
}