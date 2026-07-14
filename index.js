    const http = require('http');
    const fs =  require('fs');

    const server = http.createServer((req,res) => {
    // res.writeHead(200, { 'Content-Type': 'text/plain' });
    // res.end('./index.html');
    if (req.url === '/contact') {
        fs.readFile('contact.html' , (erreur,data) => {
            res.end(data);
        });
    }
    
    else if (req.url === '/about') {
        fs.readFile('about.html', (error,data)=>{
            res.end(data)
        });
    }
    else if (req.url === '/') {
        fs.readFile('index.html', (error,data)=>{
            res.end(data)
        });
    }
    else {
        res.end(` error 404 page not faound`);
    }

});

    server.listen(3000); 