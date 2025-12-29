/**
 * Implement a HTTP server that serves JSON data where user requests /api/parsetime and /api/unixtime.
 * For example, when the user requests /api/parsetime?iso=2023-05-22T12:34:56.789Z, the server should
 * respond with a JSON object containing only 'hour', 'minute' and 'second' properties.
 * {
 *  "hour": 12,
 *  "minute": 34,
 *  "second": 56
 * }
 * Similarly, when the user requests /api/unixtime?iso=2023-05-22T12:34:56.789Z, the server should
 * respond with a JSON object containing a 'unixtime' property.
 * {
 *  "unixtime": 1684758896789
 * }
 *
 * HINTS:
 * 1. Use url.parse() method to parse URL strings.
 * 2. response.writeHead(200, { contentType: 'application/json' })
 */

// your code here
const http=require('http');
const url=require('url');

const server=http.createServer((req,res)=>{
    // parse Url
    const parseUrl = url.parse(req.url, true);
    const path = parseUrl.pathname;
    const isoTime = parseUrl.query.iso;

    // 
    if(path==='/api/parsetime'){
        const date = new Date(isoTime);
        const result = {
           hour: date.getHours(),
           minute: date.getMinutes(),
           second: date.getSeconds()
        }
        res.writeHead(200, {'Content-Type':'application/json'});
        res.end(JSON.stringify(result));


    }else if(path==='/api/unixtime'){


        const date = new Date(isoTime);
        const result = {
            unixtime: date.getTime()
        }
        res.writeHead(200, {'Content-Type':'application/json'});
        res.end(JSON.stringify(result));

    }
});

server.listen(3000, () => {
    console.log('服务器运行在 http://localhost:3000');
});