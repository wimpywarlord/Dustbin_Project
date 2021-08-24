const firebase = require("firebase");

const app = firebase.initializeApp({
    apiKey: "AIzaSyCKe6UWBqgMHr76XEKWInnX_vo7uXDlSpA",
    authDomain: "test-dustin-project.firebaseapp.com",
    databaseURL: "https://test-dustin-project-default-rtdb.asia-southeast1.firebasedatabase.app/",
})

module.exports = app;