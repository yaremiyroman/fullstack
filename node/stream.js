const fs = require('fs');
const path = require('path');


const readableStream = fs.createReadStream(path.resolve('file2.txt'));
const writableStream = fs.createWriteStream(path.resolve('file2_OUTPUT.txt'));


readableStream.pipe(writableStream);

readableStream.on('data', chunk => {
    console.log('CHUNK > ', chunk);
})

writableStream.on('finish', () => {
    console.log('COPY DONE');
});

