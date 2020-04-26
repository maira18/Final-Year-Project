const express = require('express');
const mongoose=require('mongoose');
const accountSid = 'ACdf2c5ed770966c679f854007dd7aef0f';
const authToken = '588bb60a6357307aa700e78d1053e37a';
const client = require('twilio')(accountSid, authToken);
const router = express.Router();
const User = require('../model/user.model');
const UserModel=mongoose.model('User');

/* GET home page. */
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.sendSms=(req,res) => {
    UserModel.find((err,docs)=>{
        if(!err)
        {
            var contact=docs[0];
            var json=contact.toJSON();
            var number=json.contact;
            console.log(number);
            console.log(typeof number);

            const minm = 10000;
            const maxm = 99999;
            code = Math.floor(Math.random() * (maxm - minm + 1)) + minm;
            try {
                client.messages.create({
                    body: `Your 2-Factor authentication code is: ${code}, If you did not request this please contact the DoctorNow support team immediately.\r\rThanks,\r\rDoctorNow Support`,
                    to: number,
                    from: '+19252415625',
                })
                    .then(message => console.log(message.sid));
                //.done();
            }
            catch (e) {
                console.log('error in sending message from twilio => ', e);
            }
            res.send("Send");
        }
        else
        {
            res.send("ERROR");
        }
    });
};

exports.createUser=(req,res)=>{
    console.log(req.body);
    //res.send({"status":"200","payload":{"message":"hello"}});
    let db = mongoose.connection;
    new User({
        name: req.body.name,
        contact: req.body.contact
    }).save(function(err,doc){
        if(err) res.json(err);
        else res.send({"status":"200","payload":{"message":"hello"}});
    });
    // let user = new User(data);
    // console.log("insert");
    // db.collection('users').insertOne(user, (err, data) => {
    //     if (err) return console.log(err);
    //     res.send(('saved to db: ' + data));
    // })
};
