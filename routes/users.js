var express = require('express');
var router = express.Router();

var config = require('../config/database');

//user model
var User = require('../models/user');




//USERS AND PROFILE 
//GET ALL USERS
router.get("/", function(req, res) {
	console.log('getting all users');
	User.find({})
	.exec(function(err,users){
		if(err){
			res.send('error')
		} else {
			// console.log(users);
			res.json(users)
		}
	})
});



//GET SINGLE USER
//get single user by id
router.get('/:id', function(req, res) {
	console.log('get user by id');
	User.findOne({
	    _id: req.params.id
	})
	.exec(function(err, user) {
	    if(err) {
	        res.send('error occured')
	    } else {
	        // console.log(user);
	        res.json(user);
	    }
	});
});



//DELETE USER
//delete the user by id
router.delete('/:id', function(req, res) {
	User.findOneAndRemove({
	    _id: req.params.id
	}, function(err, user) {
	    if(err) {
	      res.send('error removing')
	    } else {
	      // console.log(user);
	      res.json({ message: 'Successfully deleted' });
	    }
	});
});




//CREATE USER
//get user object from body
//add user 
router.post('/', (req,res,next)=>{
	//user data from body
	var newUser = new User({
		name:req.body.name,
		email:req.body.email,
		username:req.body.username,
		password:req.body.password
	});

	//add user with user model
	User.addUser(newUser, (err,user)=>{
		if(err){
			res.json({success:false, msg:'Failed to register user'});
		} else {
			res.json({success:true, msg:'User registered'})
		}
	});
});




//UPDATE USER
//find and update by id 
//update the title
//send the new user
router.put('/:id', function(req, res) {
	console.log('updating user by id')


	var newname = req.body.name;
	var newemail = req.body.email;
	var newusername = req.body.username;
	var newpassword = req.body.password;


	console.log(req.body)


	User.findOneAndUpdate({
	    _id: req.params.id
	    },
	    { $set: { 
	      
		    name:newname,
		    email:newemail,
		    username:newusername,
		    password:newpassword
	     
	    }
	}, {upsert: true}, function(err, newUser) {
	    if (err) {
	      res.send('error updating ');
	    } else {
	      res.send(newUser);
	    }
	});
});









//export router
module.exports = router;



