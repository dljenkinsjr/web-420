/*============================================; 
Title: Assignment 2.3; 
Author: Professor Krasso ; 
Date: 20 October 2020; 
Modified By: Douglas Jenkins; 
Description: API Gateway 2
;===========================================*/

var User = require('../models/user');

// Register a new user on POST
exports.user_register = function (request,response){
    response.send('Not Implemented: User registration POST');
};

//Verify token on GET
exports.user_token = function (request, response){
    response.send('Not Implemented: User token lookup GET');
};