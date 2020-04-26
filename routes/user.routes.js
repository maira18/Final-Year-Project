const accountSid = 'ACdf2c5ed770966c679f854007dd7aef0f';
const authToken = '588bb60a6357307aa700e78d1053e37a';
const client = require('twilio')(accountSid, authToken);
const userController=require('../controller/user.controller');
const express = require("express");
const router = express.Router();

router.get('/test', userController.test);
router.get ('/sendSms',userController.sendSms);
router.post('/add', userController.createUser);

module.exports = router;
