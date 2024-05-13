const http = require('http');
const fs = require('fs');

const PORT = 3000;

const server = http.createServer((req, res) => {
  const method = req.method;
  const url = req.url;
  if(method === "GET"){
    if(url === "/"){
      res.writeHead(200, {'Content-type': 'text/html'});
      fs.readFile('../../home.html', (err, data) => {
        if(err){
          return console.log(err);
        }
        return res.end(data, 'utf-8');
      });
    }
    if(url === "/css/style.css"){
      res.writeHead(200, {'Content-type': 'text/css'});
      fs.readFile('../../css/style.css', (err, data) => {
        if(err){
          return console.log(err);
        }
        return res.end(data, 'utf-8');
      })
    }
    if(url === "/js/function/clock.js"){
      res.writeHead(200, {'Content-type': 'text/javascript'});
      fs.readFile('../../js/function/clock.js', (err, data) => {
        if(err){
          return console.log(err);
        }
        return res.end(data, 'utf-8');
      })
    }
    if(url === "/js/function/header.js"){
      res.writeHead(200, {'Content-type': 'text/javascript'});
      fs.readFile('../../js/function/header.js', (err, data) => {
        if(err){
          return console.log(err);
        }
        return res.end(data, 'utf-8');
      })
    }
    if(url === "/js/function/list.js"){
      res.writeHead(200, {'Content-type': 'text/javascript'});
      fs.readFile('../../js/function/list.js', (err, data) => {
        if(err){
          return console.log(err);
        }
        return res.end(data, 'utf-8');
      })
    }
    if(url === "/js/function/users.js"){
      res.writeHead(200, {'Content-type': 'text/javascript'});
      fs.readFile('../../js/function/users.js', (err, data) => {
        if(err){
          return console.log(err);
        }
        return res.end(data, 'utf-8');
      })
    }
    console.log(req.url);
    console.log(req.method);
  }
})

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});