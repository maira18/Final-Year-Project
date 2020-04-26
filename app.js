const connection=require("./model/connection");
const User=require("./model/user.model");
const express = require('express');
var cors = require('cors');
const path = require('path');
const bodyparser = require('body-parser');
const mongoose= require('mongoose');
const userRoutes=require('./routes/user.routes');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const route = express.Router();
var app = express();
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/user',userRoutes);
app.use(bodyparser.urlencoded({
  extended:true
}));

// route.route('/add').post(function(req,res){
//   let user = new User(req.body);
//   console.log("insert");
//   user.save().then(user=>{
//     console.log("inside ");
//     res.status(200).json({'todo':'todo added successfuly'});
//   }).catch(err=>{
//     res.status(400).send('adding new todo failed');
//   });
// });

app.get('/',function(req,res){
  console.log("hello");
});

app.post("/user",(req,res)=>{
  res.send(req.body);
});

app.listen("3000",()=>{
  console.log("Server Started");
});

module.exports = app;
