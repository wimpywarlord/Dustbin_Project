var express = require("express");
var bodyParser = require("body-parser");
// var mongoose = require("mongoose");

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname+'/public'));


// DATA ENTRY
app.get("/", function (req, res) {
    res.send("BOOM CHICKA");
})

app.on('ready', function() { 
    app.listen(process.env.PORT || 3000, function () {
        console.log("SERVER 3000 HAS STARTED");
    });
});