/** @format */

const express = require("express");
const router = express.Router();

const db = require("../config/database");
const Employee = require("../models/Employees");
const Employees = require("../models/Employees");

//get all employees
//reports to /employees route
router.get("/", (req, res) =>
  Employees.findAll()
    .then((employees) => {
      console.log(employees);
      res.sendStatus(200);
    })
    .catch((err) => console.log(err))
);

router.get("/add", (req, res) => {
  const data = {
    first_name: "Nebby",
    last_name: "Rah",
    department: "Math",
    id: 0,
  };
  let { first_name, last_name, department, id } = data;
  //insert into table
  Employee.create({
    first_name,
    last_name,
    department,
    id,
  })
    .then(employee =>res.redirect("/employees"))
    .catch((err) => console.log(err));
});
module.exports = router;
