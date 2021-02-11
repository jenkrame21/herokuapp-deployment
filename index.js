// runs .env file
const dotenv = require("dotenv").config();
const express = require("express");
const cors = require('cors');

const app = express();
// Port number changes once thrown onto Heroku
const port = process.env.PORT || 9000

app.use(cors());
app.use(express.json());

// _ is a placeholder
// Doesn't need json plugin to work
// Internal api
app.use("/api/*", (_,res) => {
    res.json({data: "The API LIVES!!!!"});
});

app.listen(port, () => {
    console.log(`Server is alive on port ${port}`);
});


// NOTES BELOW

// console.log("It's alive!");
// console.log(__dirname);
// console.log(__filename);
// console.log(process.env.USERNAME);
// // .USER on Macs!!
// console.log(process.env.PORT);
// // logs all of info in .env file
// console.log(dotenv);
// // Logs FOOD in .env file
// console.log(process.env.FOOD);

// CORS = Cross Origin Resorce Sharing