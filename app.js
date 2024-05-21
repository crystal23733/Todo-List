import http from 'http';
import fs from 'fs';
import path from 'path';

const PORT = 3000;

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
    console.log(`filePath : ${filePath}`);
    return filePath;
  },
  getFileExtension : (filePath) => {
    let ext = path.extname(filePath);
    console.log(`ext : ${ext.toLowerCase()}`);
    return ext.toLowerCase();
  },
  getContentType : (ext) => {
    if(mimeType.hasOwnProperty(ext)){
      console.log(mimeType.hasOwnProperty(ext));
      return mimeType[ext];
    } else {
      return 'text/plain';
    }
  }
}

const server = http.createServer((req, res) => {
  const { method, url } = req;
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
  }
})

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});