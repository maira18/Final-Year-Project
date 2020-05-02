const express = require('express');
const mongoose=require('mongoose');
const accountSid = 'ACdf2c5ed770966c679f854007dd7aef0f';
const authToken = '588bb60a6357307aa700e78d1053e37a';
const User = require('../model/user.model');
const RegisterUser=require('../model/registeredUsers.model');
const RegUserModel=mongoose.model('RegisterUser');
const UserModel=mongoose.model('User');

/* GET home page. */
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.sendSms= async (req, res) => {
    await UserModel.find({'userNumber': req.body.contact}, async function (err, docs) {
        if (!err)
        {
            let contact = docs[0];
            let json = contact.toJSON();
            let number = json.userNumber;

            const minm = 100000;
            const maxm = 999999;
            let code = Math.floor(Math.random() * (maxm - minm + 1)) + minm;
            try {
                const client = await require('twilio')(accountSid, authToken);
                const msg= await client.messages.create({
                    body: 'Hi your 2 factor authentication code is :' + code,
                    to: `+` + number,
                    from: '+19252415625',
                });
                console.log(msg);
                    //.then(message => console.log(message.sid));
            } catch (e) {
                console.log('error in sending message from twilio => ', e);
            }
            res.send({"code": code});
        } else {
            console.log("ERROR");
        }
    });
};

exports.createUser= async (req, res) => {

    await RegUserModel.find({'userNumber': req.body.contact}, function (err, docs) {
        if(docs.length>0){
            console.log("Number already registered");
            res.send({"status": 400});
        }

    });

    const test = await UserModel.create({
        userName: req.body.name,
        userNumber: req.body.contact,
    });
    if (test) {
        res.send({"status": 200});
    } else
        res.send({"message": test});
};

exports.registerUser=(req,res)=>{
    const test = RegUserModel.create({
        userName: req.body.name,
        userNumber: req.body.contact,
    });
    if (test) {
        const delTest=UserModel.deleteMany({"userNumber":"req.body.contact"});

        res.send({"status": 200});
    } else
        res.send({"message": test});
};
