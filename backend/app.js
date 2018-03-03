var Blockchain = require("./blockchain/BlockChain.js");

const express = require('express');
const http = require('http');
const PORT = 3000;
const fs = require('fs');
const Datastore = require('nedb');
const crypto = require('crypto');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const app = express();
app.use(cors());
app.options('*', cors());

var privateKey = fs.readFileSync('server.key');
var certificate = fs.readFileSync('server.crt');

var config = {
    key: privateKey,
    cert: certificate
};

var blockchain = new Blockchain();
var users =  new Datastore({ filename: 'db/users.db', autoload: true});

function createSalt(){
    return crypto.randomBytes(16).toString('base64');
}

function createHash(password, salt){
    var hash = crypto.createHmac('sha512', salt);
    hash.update(password);
    return hash.digest('base64');
}


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());   

app.use(function (req, res, next){
    console.log("HTTP request", req.method, req.url, req.body);
    next();
});

app.get('/api/stuff', function(req, res, next){
    res.json({stuff:'stuff'});
});

app.post('/register', function (req, res, next){
    // check if requests containes values
    if (!('username' in req.body)) return res.status(400).end('Username is missing');
    if (!('password' in req.body)) return res.status(400).end('Password is missing');
    if (!('type' in req.body)) return res.status(400).end('Type is missing');
    // get username and password
    var username = req.body.username;
    var password = req.body.password;
    var type = req.body.type;

    // check if username doesn't already exist
    users.findOne({_id: username}, function(err, user){
        if (err) return res.status(500).end(err);
        if (user) return res.status(409).end("Username " + username + " already exists");
        // otherwise create hash and add to database
        var salt = createSalt();
        var hash = createHash(password, salt);
        users.update({_id: username}, {_id: username, salt:salt, hash:hash, type:type}, {upsert: true}, function(err){
            if (err) return res.status(500).end(err);
            return res.json("User " + username + " has successfully registered.");
        });
    });
});

// let non authenticated users sign in
app.post('/signin', function (req, res, next) {
    // check if requests containes values
    if (!('username' in req.body)) return res.status(400).end('Username is missing');
    if (!('password' in req.body)) return res.status(400).end('Password is missing');
    // get username and password
    var username = req.body.username;
    var password = req.body.password;
    // retrieve user from the database
    users.findOne({_id: username}, function(err, user){
        if (err) return res.status(500).end(err);
        if (!user) return res.status(401).end("Username " + username + " does not exist");
        if (user.hash !== createHash(password, user.salt)) return res.status(401).end("Incorrect Password"); 
        return res.json({token: jwt.sign({ SSN: user._id,  password: password}, "Secret", {expiresIn:'1h'})});
      });
});

app.post('/getWalletDetails/', function(req, res, next){
    if (!('jwt' in req.body)) return res.status(401).end('JWT is missing. Not Authorized');
    var token = req.body.jwt;
    jwt.verify(token, "Secret", function(err, decoded){
        if (err) return res.status(500).end('Failed to authenticate token');
        users.findOne({_id: decoded.SSN}, function(err, user){
            if (err) return res.status(500).end('Failed to find user');
            if (!user) return res.status(401).end('JWT is not valid');
            return res.json({wallet:user._id, coin:blockchain.getBalanceOfAddress(user._id)});
        });
    });
});

// let authenticated users sign out
app.get('/signout', function (req, res, next) {
    res.status(200).send({token: null});
});

app.get('/analytics/', function (req, res, next){
    
});



http.createServer(app).listen(PORT, function (err) {
    if (err) console.log(err);
    else console.log("HTTP server on http://localhost:%s", PORT);
});