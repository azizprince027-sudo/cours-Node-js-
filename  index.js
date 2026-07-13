    import  http  from "http";
    const server = http.createServer((req,res)=> {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Send the response body as 'Hello, World!'
    res.end('Hello, World!\n');
    });

    server.listen(3000)