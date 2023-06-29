const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, 'src', req.url);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('File not found');
    } else {
      const extension = path.extname(filePath);
      if (extension === '.js') {
        res.writeHead(200, { 'Content-Type': 'text/javascript' });
      } else if (extension === '.css') {
        res.writeHead(200, { 'Content-Type': 'text/css' });
      } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
      }
      res.end(data);
    }
  });
});

const port = process.env.PORT || 5743;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
