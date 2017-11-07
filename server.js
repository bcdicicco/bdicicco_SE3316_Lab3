// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost/users_test');
var Message     = require('./models/message.js');

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

// more routes for our API will happen here

// on routes that end in /message
// ----------------------------------------------------
router.route('/message')

    // create a message 
    .post(function(req, res) {
        res.setHeader("Access-Control-Allow-Origin", "*");
        var message = new Message();      // create a new instance of the Message model
        message.text = req.body.text;  // set the message text (comes from the request)
        message.courseCode = req.body.courseCode;
        console.log('Something is happening. POST');

        // save the message and check for errors
        message.save(function(err) {
            if (err) {
                res.send(err);
            }
            
            res.json({ message: 'Message created!' });
            
        });
        
    })
        
    // get all the bears (accessed at GET http://localhost:8080/api/bears)
    .get(function(req, res) {
        res.setHeader("Access-Control-Allow-Origin", "*");
        Message.find(function(err, message) {
            if (err){
                res.send(err);
            }

            res.json(message);
            console.log('Something is happening. GET');
         });
     });
     
// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);