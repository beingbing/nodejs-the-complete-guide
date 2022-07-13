// list of some core modules - 
// https http   -->     launch a server, send/receive requests
// fs, os, path

const http = require('http');

const server = http.createServer((req, res) => {
    console.log('req: ', req);
    process.exit(); // to exit from the current process and stop the listeners hence ending event loop
})

server.listen(3000);