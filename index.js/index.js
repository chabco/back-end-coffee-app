const http = require('http');
const Coffee = require('../models/coffee');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer(async (req, res) => {
    console.log(req.url);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    if(req.url === '/onecoffee') {
        const oneCoffee = await Coffee.getById(4);
        const oneCoffeeJson = JSON.stringify(oneCoffee);
        res.end(oneCoffeeJson);
    }   else {
        res.end(`{message: 'thanks broooooo'}`)
    }
});

server.listen(port, hostname, () => {
    console.log(`Server is running on ${port}${hostname}`)
});
