// const http = require('http');
const express = require('express');
const app = express();
const Coffee = require('../models/coffee');

const hostname = 'localhost';
const port = 3000;

// const server = http.createServer(async (req, res) => {

// // app.createServer(async (req, res) => {

//     console.log(req.url);
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'application/json');
//     if (req.url === '/onecoffee') {
//         const oneCoffee = await Coffee.getById(1);
//         const oneCoffeeJson = JSON.stringify(oneCoffee);
//         res.end(oneCoffeeJson);
//     }   else {
//         res.end(`{message: 'thanks broooooo'}`)
//     }
// });


// Get all coffee
app.get('/coffee', (req, res) => {

    // "debugger" keyword adds a programmatic breakpoint for the Chrome Dev Tools:

    // debugger;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');


    console.log('you have a request!');
    const allCoffee = Coffee.getAll();
    console.log('Here are all of the orders: ')
    console.log(allCoffee);
    // res.json(allCoffee);

    if (req.url === '/coffee') {
        allCoffee.then((data) => {
            console.log("OMG IT'S DATAZZZ")
            console.log(data);
            res.json(data);
        });
    }
    else {
        res.end(`{message: 'no data being displayed bro..try again'}`)
    };
});

// Get one coffee
app.get('/coffee/:coffeeId', (req, res) => {
    const theId = parseInt(req.params.coffeeId, 10);

    console.log(theId);
    // convert 
    const oneCoffee = Coffee.getOne(theId);
    console.log(oneCoffee);
    oneCoffee.then((data) => {
        console.log('specific coffee');
        // console.log(req.params.taskId);
        // const dataJSON = JSON.stringify(data);
        // res.end(dataJSON);
        res.json(data);
    });
});





// server.listen(port, hostname, () => {
//     console.log(`Server is running on ${port}${hostname}`)
// });
app.listen(port, hostname, () => {
    console.log(`Server is running on ${hostname}:${port}`)
});