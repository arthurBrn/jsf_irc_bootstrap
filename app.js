
var absolutePathToProject="/home/baron/Documents/Epitech/t-jsf-600-bootstrap/";

var express = require('express');
var app = express();

var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.set('views engine', 'ejs');


// ,{name: req.params.name}

app.get('/:name', function(req, res){
    res.render("index.ejs", {
        name: req.params.name
    });
});

app.route('/products').get(function(req, res){res.send("Getting all product");});

app.route("/products/json")
    .get(function(req, res){
        res.json({'jsonObject':'productToJson'});
    });

app.route("/iwanthtml")
    .get(function(req, res){
        res.sendFile(absolutePathToProject + "somehtml.html");
    });

app.route('/products/:someId')
    .get(function(req, res){
        res.send("Getting product with ID : " + req.params.someId);
        console.log("===== REQ.PARAMAS");
        console.log(req.params);
    });

app.use(function(req, res, next){
    res.status(400).send("NEW 404 PAGE");
});

server.listen(3000);

io.on('connection', function(socket){
    console.log("Client connected");
    socket.on('disconnect', function(){
        console.log("user disconnected");
    });

});