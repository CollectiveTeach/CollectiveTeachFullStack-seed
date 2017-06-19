var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');

var mongoose = require('mongoose');
var config = require('./config/database')

//connect to mongoose from config
mongoose.connect(config.database);
mongoose.connection.on('connected', ()=>{
	console.log('connected to DB '+config.database)
});
mongoose.connection.on('error', (err)=>{
	console.log('database error: '+err)
});


//start server
var app = express();


//users routes
var users = require('./routes/users');


//cors middleware. can also use express cors
app.use(cors());
//set static folder
app.use(express.static(path.join(__dirname, 'public')))
//body parser middleware
app.use(bodyParser.json());





//users routes
app.use('/users',users)





//index route
app.get('/',(req,res)=>{
	res.send('invalid endpoint')
});

//redirect anything else to index
app.get('*',(req,res)=>{
	res.sendFile(path.join(__dirname,'public/index.html'))
})





//port
const port = process.env.PORT || 8080 ;

app.listen(port, ()=> {
	console.log('server started on port '+ port)
});










