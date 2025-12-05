import 'dotenv/config';
import http from "http";
const port = process.env.PORT ?? 3000

const server = http.createServer();

server.on('request', (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'content-type': 'application/json' });
    res.end(JSON.stringify({ data: 'default route', method: req.method }))
  } else {
    res.writeHead(404, { 'content-type': 'application/json' });
    res.end(JSON.stringify({ data: 'No other routes exist except default route' }))
  }
})

server.listen(port, () => {
  console.log(`server is listening at port : ${port}`);
})