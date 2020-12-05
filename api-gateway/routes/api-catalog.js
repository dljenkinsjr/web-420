/*============================================; 
Title: Assignment 2.3; 
Author: Professor Krasso ; 
Date: 20 October 2020; 
Modified By: Douglas Jenkins; 
Description: API Gateway 2
;===========================================*/

/**
 API Routes
 */

var express = require('express');
var router = express.Router();
var auth_controller = require('../controllers/authController');
var checkToken = require('../check-token');

//Post request for registering a user
router.post('/auth/register', auth_controller.user_register);

//Get request for verifying user tokens
router.get('/auth/token', checkToken, auth_controller.user_token);

//Post request for registering a user
router.post('/auth/login', auth_controller.user_login);

//Get request for verifying user tokens
router.get('/auth/logout', auth_controller.user_logout);


module.exports = router;