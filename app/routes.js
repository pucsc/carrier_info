// Dependencies
var mongoose        = require('mongoose');
var User            = require('./model.js');
var controller      = require('./controller.js');


// Opens App Routes
module.exports = function(app) {

    // we are reformating the orignal input URL in such a way, it is modualar and follow Best practices of REST protocol
    // by appending '/carriers' to all URL
    app.use('/', function(req, res, next){

        var originalUrl = req.url;
        if (originalUrl.localeCompare("/carriers") == 0 ) {
            req.url = '/carriers' + "/all";
        }
        else {
            req.url = '/carriers' + originalUrl;
        }
        console.log('OriginalURL to New: ' + originalUrl + ' -> ' + req.url);
        next();
    });


    // Now process the above REFORMATED URLs
    // Route to  handle LISTING of ALL Carriers
    app.get('/carriers/all', function(req, res){
        var responseObject = controller.list_carriers(req,res) ;
        res.json(responseObject) ;
    });

    // Route to handle Listing of ALL Flights for a given :carrierID
    app.get('/carriers/:carrierID', function(req, res){
        var responseObject = controller.list_flights(req,res) ;
        res.json(responseObject) ;
    });

    // Route to handle fetch information about given  : flightID and  :carrierID
    app.get('/carriers/:carrierID/:flightID', function(req, res){
        console.log('param 2 is:' + req.params.flightID) ;
        var responseObject = controller.get_flight_info(req,res) ;
        res.json(responseObject) ;
    });



};

