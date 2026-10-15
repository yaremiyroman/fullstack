const path = require('path');

const fullPath = path.resolve('node', 'path.js');
const fileName = path.basename(fullPath);
const extension = path.extname(fullPath);

const somePath = path.join(path.resolve(), 'node', 'path.js');

console.log('somePath > ', somePath);
