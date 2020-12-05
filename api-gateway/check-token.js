/*============================================; 
Title: Assignment 8.4; 
Author: Professor Krasso ; 
Date: 20 October 2020; 
Modified By: Douglas Jenkins; 
Description: API Gateway 5
;===========================================*/

var jwt = require('jsonwebtoken');
var config = require('./config');

/**
 * Check the HTTP header for a valid json web token
 * @param req
 * @param res
 * @param next
 */


 function checkToken(req, res, next) {

    var token = req.headers['x-access-token'];

        if (!token)
            return res.status(403).send({ auth: false, message: 'No token provided.'});

        jwt.verify(token, config.web.secret, function(err, decoded) {
            if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.'});

            req.userId = decoded.id;
            next();
        });
}

//exports
module.exports = checkToken;