const http = require("http");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>EasyDriver</title>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
      <h1>EasyDriver</h1>
      <p>Application is running successfully on port ${port}</p>
    </body>
    </html>
  `);
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
