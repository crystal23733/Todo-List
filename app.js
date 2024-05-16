import http from 'http';
import fs from 'fs';

const PORT = 3000;

const server = http.createServer((req, res) => {
  const method = req.method;
  const url = req.url;
  if(method === "GET"){
    switch(url){
      case "/" :
        console.log('clear');
        res.writeHead(200, {'Content-type': 'text/html'});
        const data = fs.readFileSync('./public/home.html');
        res.end(data);
        break;
      case "/css/style.css" : 
        console.log('clear2');
        res.writeHead(200, {'Content-type': 'text/css'});
        const data1 = fs.readFileSync('./public/css/style.css');
        res.end(data1);
        break;
      case "/js/clock.js" :
        res.writeHead(200, {'Content-type': 'text/javascript'});
        const data2 = fs.readFileSync('./public/js/clock.js');
        res.end(data2);
        break;
      case "/js/header.js" :
        res.writeHead(200, {'Content-type': 'text/javascript'});
        const data3 = fs.readFileSync('./public/js/header.js');
        res.end(data3);
        break;
      case "/js/list.js" : 
        res.writeHead(200, {'Content-type': 'text/javascript'});
        const data4 = fs.readFileSync('./public/js/list.js');
        res.end(data4);
        break;
      case "/js/users.js" :
        res.writeHead(200, {'Content-type': 'text/javascript'});
        const data5 = fs.readFileSync('./public/js/users.js');
        res.end(data5);
        break;
      case "/js/modules/KEY.js" :
        res.writeHead(200, {'Content-type': 'text/javascript'});
        const data6 = fs.readFileSync('./public/js/modules/KEY.js');
        res.end(data6);
        break;
      case "/js/modules/selector.js" : 
        res.writeHead(200, {'Content-type': 'text/javascript'});
        const data7 = fs.readFileSync('./public/js/modules/selector.js');
        res.end(data7);
        break;
      case "/js/modules/function/displayItem.js" : 
        res.writeHead(200, {'Content-type': 'text/javascript'});
        const data8 = fs.readFileSync('./public/js/modules/function/displayItem.js');
        res.end(data8);
        break;
    }
    console.log(req.url);
    console.log(req.method);
  }
})

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});