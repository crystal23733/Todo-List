import http from 'http';
import fs from 'fs';
import path from 'path';
import qs from 'querystring';

const PORT = 8080;

// *확장자 객체
const mimeType = {
  '.html' : 'text/html',
  '.css' : 'text/css',
  '.js' : 'application/javascript',
  '.json' : 'appllication/json',
  '.ico' : 'image/x-icon'
}

// *파일 경로와 정보를 가져오는 함수
const fileUtils = {
  getFilePath : (fileUrl) => {
    let filePath;
    if(fileUrl === '/'){
      filePath = './public/home.html';
    } else {
      filePath = `./public${fileUrl}`;
    }
    // console.log(`filePath : ${filePath}`);
    return filePath;
  },
  getFileExtension : (filePath) => {
    let ext = path.extname(filePath);
    // console.log(`ext : ${ext.toLowerCase()}`);
    return ext.toLowerCase();
  },
  getContentType : (ext) => {
    if(mimeType.hasOwnProperty(ext)){
      // console.log(mimeType.hasOwnProperty(ext));
      return mimeType[ext];
    } else {
      return 'text/plain';
    }
  }
}

const server = http.createServer((req, res) => {
  let { method, url } = req;
  console.log(method, url);
  // *파일 경로 설정
  let filePath = fileUtils.getFilePath(url);
  // *확장자 가져오기
  let ext = fileUtils.getFileExtension(filePath);
  // *콘텐츠 타입
  let contentType = fileUtils.getContentType(ext);
  if(method === 'GET'){
    fs.readFile(filePath, (err, data) => {
      if(err){
        if(err.code === 'ENOENT'){
          res.writeHead(404, {'Content-type' : 'text/html; charset=utf-8'});
          res.end('페이지를 찾을 수 없음');
        } else {
          res.writeHead(500, {'Content-type': 'text/plain; charset=utf-8'});
          res.end('서버에러');
        }
      } else {
        res.writeHead(200, {'Content-type' : contentType});
        res.end(data);
      }
    })
  } else if(method === 'POST'){
    if(url === '/'){
      let body = '';
      req.on('data', (chunk) => {
        body += chunk.toString();
      });
      req.on('end', () => {
        const params = new URLSearchParams(body);
        const user = params.get('user');
        const nameData = {user : user};
        const jsonNameData = JSON.stringify(nameData, null, 2);
        fs.writeFile('./public/js/DB/data.json', jsonNameData, (err) => {
          if(err){
            res.writeHead(500, {'Content-type' : 'text/plain; charset=utf-8'});
            res.end('서버에러');
          }
          fs.readFile(filePath, (err, data) => {
            res.writeHead(302, {'Content-type' : contentType});
            res.end(data);
          })
        });
      })
    }
  }
})

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

// todo user, list Data를 post로 json파일에 저장, /로 redirect하기
// * form method POST로 ?없앰