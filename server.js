const express = require('express');
const server = express();
const monggo = require('mongoose');
const index = require('./routes/index');
const bodyParser = require('body-parser');



server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended:false}));


server.use('/',index);

//connection to mongoose & mongo
monggo.Promise = global.Promise;
monggo.connect('mongodb://localhost/library');
monggo.connection.on('connected', function(){
  console.log('mongodb is connected');
})

server.listen(3000);