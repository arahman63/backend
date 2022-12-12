/** @format */

const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const path = require("path");

//Databse
// ./config/database same as ./config/database.js
const db = require("./config/database.js");

//test db
db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: ", err));
const app = express();
app.get("/", (req, res) => res.send("INDEX"));

//Employees routes, anytime this part of the link is accessed get info from the employees route
app.use("/employees", require("./routes/employees"));
app.use("/tasks", require("./routes/tasks"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
