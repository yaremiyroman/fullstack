const http = require('http');

http.get('http://localhost:5324/some-page-here', (res) => {
    console.log('res > ', res);
});
