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

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
