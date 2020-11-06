/*============================================; 
Title: Assignment 2.3; 
Author: Professor Krasso ; 
Date: 20 October 2020; 
Modified By: Douglas Jenkins; 
Description: API Gateway 2
;===========================================*/

var config = {};

config.web = {};

config.web.port = process.env.PORT || '8000';


module.exports = config;

//added for assignment 2.3
config.web.secret = 'topsecret';