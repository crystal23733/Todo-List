const http = require('http');
const fs = require('fs');

const PORT = 3000;

const server = http.createServer((req, res) => {
  const method = req.method;
  const url = req.url;
  console.log(url);
  if(method === "GET"){
    if(url === "/"){
      res.writeHead(200, {'Content-type': 'text/html'});
      fs.readFile('../../index.html', (err, data) => {
        if(err){
          return console.log(err);
        }
        res.end(data);
      })
    }
  }
  console.log(method);
})

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});