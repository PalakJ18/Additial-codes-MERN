// step1 - create folder
// step2 - move into that folder
// step3 - npm init -y
// step4 - open folder using vscode
// step5 - npm i express
// step6 - create server.js

// create a single instance of express
const express = require("express");

// naming the instance
const app = express();

// used to parse req.
const bodyParser = require("body-parser");
// parse JSON data & add it to the request.Body object
app.use(bodyParser.json());

// giving / alotting the port to app  -> bad practice this way
app.listen(5000, () => {
  console.log("Server Establish at 5000 Port");
});

// Routes - get request
app.get("/", (req, res) => {
  res.send("Sender");
});

app.post("/api/cars", (req, res) => {
  const { name, brand } = req.body; // extract both from req body
  console.log(name);
  console.log(brand);
  res.send("Car Submitted");
});

//create mongoose instance to connect db with node
const mongoose = require("mongoose");
//set up connection // if non existing name is given , it creates the named db
mongoose.connect("mongodb://127.0.0.1:27017/Cars", {
// mongoose.connect("mongodb://localhost:27017/Cars", {
  // must write configuration => use parser and topology
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => { // above code i a promise
    console.log("Connection established");
  })
  .catch((error) => console.log("not connected"));
  // .catch((error) => console.log(error));
