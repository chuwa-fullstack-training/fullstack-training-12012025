// TODO: 创建一个 HTTP 服务器，实现以下功能：

const http = require('http');

// 路由：
// GET /              -> 返回 "欢迎来到我的网站"image.png
// GET /about         -> 返回 "关于我：Vivian, Full-Stack Developer"
// GET /api/time      -> 返回当前时间的 JSON
// GET /api/users     -> 返回用户列表的 JSON
// 其他路径           -> 返回 404
const users = [
    { id: 1, name: 'Vivian', role: 'Full-Stack Developer' },
    { id: 2, name: 'John', role: 'Backend Developer' },
    { id: 3, name: 'Jane', role: 'Frontend Developer' }
];

const server = http.createServer((req, res) => {
    const url = req.url;
    if(url==='/'){
        res.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'});
        res.end("Welcome to myweb");
    }else if(url==='/about'){
        res.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'});
        res.end("About me: Vivian, Full-Stack Developer");
    }else if(url==="/api/time"){
        res.writeHead(200,{'Content-Type':'application/json'});
        const currentTime = new Date().toLocaleString('en-US');
        res.end(JSON.stringify({time:currentTime}));
    }else if(url==='/api/users'){
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(users));
    }else{
        res.writeHead(404,{'Content-Type':'text/plain; charset=utf-8'});
        res.end("404 page not found")
    }
});

server.listen(3000, () => {
    console.log('服务器运行在 http://localhost:3000');
});