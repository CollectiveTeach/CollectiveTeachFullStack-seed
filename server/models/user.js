var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var config = require('../config/database');


//user schema
var UserSchema = mongoose.Schema({
	name:{
		type:String
	},
	email:{
		type:String,
		required:true
	},
	username:{
		type:String,
		required:true
	},
	password:{
		type:String,
		required:true
	}
});


var User = module.exports = mongoose.model('User',UserSchema);



//get user by id
module.exports.getUserById = function(id,callback){
	User.findById(id,callback);
}

//get user by
module.exports.getUserByUsername = function(username,callback){
	var query = { username: username};
	User.findOne(query,callback)
}

//add user with hash
module.exports.addUser = function(newUser, callback){
	newUser.save(callback);
}



