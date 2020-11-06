/*============================================; 
Title: Assignment 4.3; 
Author: Professor Krasso ; 
Date: 3 November 2020; 
Modified By: Douglas Jenkins; 
Description: API Gateway 3
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

//user.save is used to add a new user in our database
module.exports.add = (user, callback) => {
    user.save(callback);
}

//module get ID
module.exports.getById = (id, callback) => {
    var query = {_id: id};
    User.findById(query, callback);
};

var User = module.exports = mongoose.model('User', userSchema);