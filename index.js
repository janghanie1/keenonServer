import routes from "./routes/index.js"
import express from 'express'

var app = express(); //express를 실행하여 app object를 초기화 합니다.

app.use(express.json())
app.use('/', routes)


const port = 8080
app.listen(port, function(){ // port변수를 이용하여 8080번 포트에 node.js 서버를 연결합니다.
  console.log('server on! http://localhost:'+port); //서버가 실행되면 콘솔창에 표시될 메세지입니다.
});
