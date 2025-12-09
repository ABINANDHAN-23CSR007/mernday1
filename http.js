const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {

    if (req.url === "/getserver" && req.method === "GET") {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello, this is the GET server response!\n');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Route not found');
    }
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
