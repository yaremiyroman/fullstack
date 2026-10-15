const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        console.log(`Get Request for ${req.url}`);
        res.end(`Get Request for ${req.url}`);
    } else if (req.method === 'POST') {
        let body = '';

        req.on('data', chunk => {
            body += chunk;
        });

        console.log(`Post Request for ${req.url}`);

        req.on('end', () => {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(`POST Request for ${body}`);
        });
    } else {
        res.writeHead(404);
        res.end('404 Not Found');
    }
});

server.listen(5324, () => {
    console.log('Server started on port ', '5324');
});