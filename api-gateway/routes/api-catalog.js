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

//Post request for registering a user
router.post('/auth/register', auth_controller.user_register);

//Get request for verifying user tokens
router.get('/auth/token', auth_controller.user_token);

module.exports = router;