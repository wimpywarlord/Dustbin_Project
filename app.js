var express = require("express");
var bodyParser = require("body-parser");
var ofirebase = require("./firebase/setData");
// var mongoose = require("mongoose");

var app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname+'/public'));

// mongoose.connect(

//     "mongodb+srv://gec:noida132@cluster0.vrxpg.mongodb.net/<dbname>?retryWrites=true&w=majority",
//     {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         dbName: "colleges",
//     },
//     async function (err, res) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log("Connected To DB");
//             app.emit('ready'); 
//         }
//     }

// );



// DATA ENTRY
app.get("/", function (req, res) {
    res.render("page-login.ejs");
    // CODE HERE FOR AUTHENTICATION
})

app.post("/homepageauth", function (req, res) {
    if (condition) {
            // CODE HERE FOR AUTHENTICATION
    } else {
        
    }
})

// HOME PAGE
app.get("/index", function (req, res) {
    res.render("index.ejs");
})

// GRAPH
app.get("/analytics", function (req, res) {
    res.render("index2.ejs");
})


// PROFILE PAGE
app.get("/app-profile", function (req, res) {
    res.render("app-profile.ejs");
})

// PROFILE PAGE
app.get("/test", function (req, res) {
    res.render("test.ejs");
})

// FIRE BASE TESTING 
app.post("/savedata/",function (req,res) {
    ofirebase.saveData(req.body, function (err, data) {
        // WE NEED TO RETURN THE RESULT TO WEB PAGE
        res.send(data);
    });
})

app.listen(process.env.PORT || 3000, function () {
    console.log("SERVER 3000 HAS STARTED");
});
