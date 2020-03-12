
var absolutePathToProject="/home/baron/Documents/Epitech/t-jsf-600-bootstrap/";

// récupère le serveur express | en crée une instance
var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send("Welcome home!");
});


app.route('/products')
    .get(function(req, res){
        res.send("Getting all product");
    });

app.route("/products/json")
    .get(function(req, res){
        res.json({
            'jsonObject':'productToJson'
        });
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

app.listen(3000, function(){
    console.log("client connected");
});