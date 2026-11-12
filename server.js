// Servidor estático mínimo, sem dependências: serve index.html em 127.0.0.1:5173
const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
  fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
    if (err) { res.writeHead(500); return res.end('erro'); }
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(data);
  });
}).listen(5173, '127.0.0.1', () => console.log('App em http://127.0.0.1:5173'));
