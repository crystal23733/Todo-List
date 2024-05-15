import http from 'http';
import fs from 'fs';

const PORT = 3000;

const server = http.createServer((req, res) => {
  const method = req.method;
  const url = req.url;
  if(method === "GET"){
    if(url === "/"){
      res.writeHead(200, {'Content-type': 'text/html'});
      fs.readFile('./public/home.html', (err, data) => {
        if(err){
          return console.log(err);
        }
        return res.end(data);
      });
    }
    if(url === "/css/style.css"){
      res.writeHead(200, {'Content-type': 'text/css'});
      fs.readFile('./public/css/style.css', (err, data) => {
        if(err){
          return console.log(err);
        }
        return res.end(data);
      })
    }
    if(url === "/js/clock.js"){
      res.writeHead(200, {'Content-type': 'text/javascript'});
      fs.readFile('./public/js/clock.js', (err, data) => {
        if(err){
          return console.log(err);
        }
        return res.end(data);
      })
    }
    if(url === "/js/header.js"){
      res.writeHead(200, {'Content-type': 'text/javascript'});
      fs.readFile('./public/js/header.js', (err, data) => {
        if(err){
          return console.log(err);
        }
        return res.end(data);
      })
    }
    if(url === "/js/list.js"){
      res.writeHead(200, {'Content-type': 'text/javascript'});
      fs.readFile('./public/js/list.js', (err, data) => {
        if(err){
          return console.log(err);
        }
        return res.end(data);
      })
    }
    if(url === "/js/users.js"){
      res.writeHead(200, {'Content-type': 'text/javascript'});
      fs.readFile('./public/js/users.js', (err, data) => {
        if(err){
          return console.log(err);
        }
        return res.end(data);
      })
    }
    if(url === "/js/modules/KEY.js"){
      res.writeHead(200, {'Content-type': 'text/javascript'});
      fs.readFile('./public/js/modules/KEY.js', (err, data) => {
        if(err){
          return console.log(err);
        }
        return res.end(data);
      })
    }
    if(url === "/js/modules/selector.js"){
      res.writeHead(200, {'Content-type': 'text/javascript'});
      fs.readFile('./public/js/modules/selector.js', (err, data) => {
        if(err){
          return console.log(err);
        }
        return res.end(data);
      })
    }
    console.log(req.url);
    console.log(req.method);
  }
})

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});