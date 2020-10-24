/*============================================; 
Title: Assignment 2.3; 
Author: Professor Krasso ; 
Date: 20 October 2020; 
Modified By: Douglas Jenkins; 
Description: API Gateway 2
;===========================================*/

/**
Fields username, password and email
 */

var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String
});

var User = module.exports = mongoose.model('User', userSchema);