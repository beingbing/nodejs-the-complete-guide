// list of some core modules - 
// https http   -->     launch a server, send/receive requests
// fs, os, path

const http = require('http');

const server = http.createServer((req, res) => {
    console.log('req: ', req.url, req.method, req.headers);
    // process.exit(); // to exit from the current process and stop the listeners hence ending event loop
    res.setHeader('Content-Type', 'text/html');
    res.write('{name: samar, age: 27, activity: study}');
    res.end();
})

server.listen(3000);