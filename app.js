var express = require("express");
var bodyParser = require("body-parser");
// var mongoose = require("mongoose");

var app = express();
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
    res.render("index.ejs");
})


app.listen(process.env.PORT || 3000, function () {
    console.log("SERVER 3000 HAS STARTED");
});
